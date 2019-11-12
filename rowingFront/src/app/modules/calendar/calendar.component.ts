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
import {Component, ChangeDetectionStrategy, OnChanges, Input, ViewChild, TemplateRef, OnInit, ViewEncapsulation} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {Subject} from 'rxjs';
import {Entrainements} from '../../domaines/entrainements';
import {EntrainementsPlanning} from '../../domaines/entrainements-planning';
import {ServiceService} from '../../services/service.service';
import {MatDialog} from '@angular/material';
import {PopupCalendarTrainingComponent} from '../../components/popup-calendar-training/popup-calendar-training.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})


export class CalendarComponent implements  OnChanges, OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @Input() trainings: Entrainements[];
  refresh: Subject<any> = new Subject();
  view: string;
  viewDate: Date = new Date();
  events: EntrainementsPlanning[] ;
  // events: CalendarEvent[] ;
  activeDayIsOpen: boolean ;

  e: EntrainementsPlanning;

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
  constructor(private modal: NgbModal, private service: CalendarService,  public dialog: MatDialog, private alertService: ServiceService) {}

  ngOnChanges() {
  }

  ngOnInit() {
    // this. events = [];
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
        // console.log(this.events);
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventDropped({
                 event,
                 newStart,
                 newEnd,
                 allDay
               }: any) {

    // let e = new EntrainementsPlanning();
    // let eventsIndex;

    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }

    if (event.end == null) {
      newStart.setHours(newStart.getHours() - 1 );
      newEnd = new Date(newStart);
      newEnd.setHours(newEnd.getHours() + 2 );

      this.e = {
        start: newStart,
        end: newEnd,
        training: event,
        title: event.title,
        draggable: event.draggable,
      };

    } else {
      this.e = {
        id: event.id,
        start: newStart,
        end: newEnd,
        title: event.title,
      };
    }

    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.save(this.e);
  }
  getAll() {
    this.service.getAll().subscribe(
      (trainingCalendar: EntrainementsPlanning[]) => {
        // this.events = trainingCalendar;
        this.events = [];
        for (const calendar in trainingCalendar) {
          this.events.push({
            start: new Date(trainingCalendar[calendar].start),
            draggable: trainingCalendar[calendar].draggable,
            end: new Date(trainingCalendar[calendar].end),
            title: trainingCalendar[calendar].title,
            color: trainingCalendar[calendar].training.color,
            id: trainingCalendar[calendar].id,
            actions: this.actions,
            training: trainingCalendar[calendar].training,
          });
        }
      });
    this.refresh.next();

  }

  eventClicked(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });

    const dialogPop = this.dialog.open(PopupCalendarTrainingComponent, {
      width: '750px',
      data: { training: event, actions: action  }

    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result.exercice);
      }
    });

  }

  save(event: EntrainementsPlanning) {
    //
    if (event.id) {
      this.service.update(event.id, event).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    } else {
      this.service.save(event).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    }
  }



  externalDrop(event: EntrainementsPlanning) {
  // externalDrop(event: CalendarEvent) {
    if (this.events.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.events.push(event);
    }
  }
}
