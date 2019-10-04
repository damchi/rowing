import {Component, ChangeDetectionStrategy, OnChanges, Input, ViewChild, TemplateRef} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { Subject } from 'rxjs';
import {Entrainements} from '../../domaines/entrainements';
import {EntrainementsPlanning} from '../../domaines/entrainements-planning';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CalendarComponent implements  OnChanges {
  @Input() trainings: Entrainements[];
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  CalendarView = CalendarView;
  view = CalendarView.Month;
  viewDate = new Date();
  // events: CalendarEvent[] = [];
  activeDayIsOpen = false;
  refresh = new Subject<void>();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color:  {
        primary: '#ad2121',
           secondary: '#FAE3E3'},
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      },
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
      },
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  constructor(private modal: NgbModal) {}

  ngOnChanges() {
  }

  // eventDropped({
  //                event,
  //                newStart,
  //                newEnd,
  //                allDay
  //              }: CalendarEventTimesChangedEvent): void {

    eventDropped({
                 event,
                 newStart,
                 newEnd,
                 allDay
               }: any) {
    const externalIndex = this.trainings.indexOf(event);
    // const externalIndex = this.externalEvents.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    const e = new EntrainementsPlanning(event.id, newStart, newEnd, event, event.title, true, this.actions);

    if (externalIndex > -1) {
      // this.externalEvents.splice(externalIndex, 1);
      this.events.push(e);
    }
    const eventsIndex = this.events.lastIndexOf(e);
    this.events[eventsIndex].start = newStart;
    if (newEnd) {
      e.end = newEnd;
    }
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  // setView(view: CalendarView) {
  //   this.view = view;
  // }
  //
  // closeOpenMonthViewDay() {
  //   this.activeDayIsOpen = false;
  // }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
  // externalDrop(event: EntrainementsPlanning) {
  // // externalDrop(event: CalendarEvent) {
  //   if (this.trainings.indexOf(event) === -1) {
  //     this.events = this.events.filter(iEvent => iEvent !== event);
  //     this.trainings.push(event);
  //   }
  // }
}
