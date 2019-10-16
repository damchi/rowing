import {Component, ChangeDetectionStrategy, OnChanges, Input, ViewChild, TemplateRef, OnInit} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {Observable, Subject} from 'rxjs';
import {Entrainements} from '../../domaines/entrainements';
import { map } from 'rxjs/operators';
import {EntrainementsPlanning} from '../../domaines/entrainements-planning';
// import {
//   startOfDay,
//   endOfDay,
//   subDays,
//   addDays,
//   endOfMonth,
//   isSameDay,
//   isSameMonth,
//   addHours
// } from 'date-fns';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarService} from '../../services/calendar.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ServiceService} from '../../services/service.service';

interface Film {
  id: number;
  title: string;
  release_date: string;
}
export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class CalendarComponent implements  OnChanges, OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @Input() trainings: Entrainements[];

  view: string;
  viewDate: Date = new Date();
  events: CalendarEvent[] ;
  activeDayIsOpen: boolean ;

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.eventClicked('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.eventClicked('Deleted', event);
      }
    }
  ];
  constructor(private modal: NgbModal, private service: CalendarService, private alertService: ServiceService) {}

  ngOnChanges() {
  }

  ngOnInit() {
    this. events = [];
    this.view = 'month';
    this.activeDayIsOpen = false;
    this.getAll();

  }


  dayClicked({
               date,
               events
             }: {
    date: Date;
    events: CalendarEvent[];
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
        console.log(this.events);
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }



  //   eventDropped({
  //                event,
  //                newStart,
  //                newEnd,
  //                allDay
  //              }: any) {
  //   const externalIndex = this.trainings.indexOf(event);
  //   // const externalIndex = this.externalEvents.indexOf(event);
  //   if (typeof allDay !== 'undefined') {
  //     event.allDay = allDay;
  //   }
  //   const e = new EntrainementsPlanning(event.id, newStart, newEnd, event, event.title, true, this.actions);
  //
  //   if (externalIndex > -1) {
  //     // this.externalEvents.splice(externalIndex, 1);
  //     this.events.push(e);
  //   }
  //   const eventsIndex = this.events.lastIndexOf(e);
  //   this.events[eventsIndex].start = newStart;
  //   if (newEnd) {
  //     e.end = newEnd;
  //   }
  //   if (this.view === 'month') {
  //     this.viewDate = newStart;
  //     this.activeDayIsOpen = true;
  //   }
  //   this.events = [...this.events];
  //
  //   this.save(e);
  // }

  eventDropped({
                 event,
                 newStart,
                 newEnd,
                 allDay
               }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.events.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      // this.events.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }
  getAll() {
    this.service.getAll().subscribe(
      (trainingCalendar: EntrainementsPlanning[]) => {
        this.events = trainingCalendar;
      });
  }

  eventClicked(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  save(event: EntrainementsPlanning) {
    this.service.save(event).subscribe(
      () => {
        this.getAll();
      },
      error => {
        this.alertService.error(error);
      });
  }
  externalDrop(event: CalendarEvent) {
    if (this.events.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.events.push(event);
    }
  }
}
