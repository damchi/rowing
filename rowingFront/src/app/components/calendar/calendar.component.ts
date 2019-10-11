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
  @Input() trainings: Entrainements[];
  // @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  //


  view: string = 'month';
  viewDate: Date = new Date();

  events: Observable<Array<CalendarEvent>>;
  // events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = false;



  // CalendarView = CalendarView;
  // view = CalendarView.Month;
  // viewDate = new Date();
  // // events: CalendarEvent[] = [];
  // activeDayIsOpen = false;
  // refresh = new Subject<void>();
  //
  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };
  //
  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fa fa-fw fa-pencil"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }
  // ];
  //
  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color:  {
  //       primary: '#ad2121',
  //          secondary: '#FAE3E3'},
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: {
  //       primary: '#e3bc08',
  //       secondary: '#FDF1BA'
  //     },
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: {
  //       primary: '#1e90ff',
  //       secondary: '#D1E8FF'
  //     },
  //     allDay: true
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: {
  //       primary: '#e3bc08',
  //       secondary: '#FDF1BA'
  //     },
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];

  constructor(private modal: NgbModal, private service: CalendarService, private http: HttpClient) {}

  ngOnChanges() {
  }

  ngOnInit() {
    this.fetchEvents();

    // this.getAll();
  }
  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'YYYY-MM-DD')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'YYYY-MM-DD')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

    this.service.getAll( params ).subscribe( (event: EntrainementsPlanning[]) => {
        this.events = event.map(({ results }: { results: EntrainementsPlanning[] }) => {
          return results.map((training: any) => {
            return {
              title: training.title,
              start: new Date(
                training.start + this.getTimezoneOffsetString(this.viewDate)
              ),
              color: training.training.color,
              allDay: true,
              meta: {
                training
              }
            };
          });
        });
      },
      error => {
        alert(error.toString());
      });
    //

    //
    // this.events = this.http
    //   .get('https://api.themoviedb.org/3/discover/movie', { params })
    //   .pipe(
    //     map(({ results }: { results: Film[] }) => {
    //       return results.map((film: Film) => {
    //         return {
    //           title: film.title,
    //           start: new Date(
    //             film.release_date + getTimezoneOffsetString(this.viewDate)
    //           ),
    //           color: colors.yellow,
    //           allDay: true,
    //           meta: {
    //             film
    //           }
    //         };
    //       });
    //     })
    //   );
  }
  getTimezoneOffsetString(date: Date): string {
    const timezoneOffset = date.getTimezoneOffset();
    const hoursOffset = String(
      Math.floor(Math.abs(timezoneOffset / 60))
    ).padStart(2, '0');
    const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
    const direction = timezoneOffset > 0 ? '-' : '+';

    return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
  }
  dayClicked({
               date,
               events
             }: {
    date: Date;
    events: CalendarEvent[];
    // events: Array<CalendarEvent<{ film: Film }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent): void {
  // eventClicked(event: CalendarEvent<{ film: Film }>): void {
    window.open(
      `https://www.themoviedb.org/movie/${event.meta.film.id}`,
      '_blank'
    );
  }

  // eventDropped({
  //                event,
  //                newStart,
  //                newEnd,
  //                allDay
  //              }: CalendarEventTimesChangedEvent): void {

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
  // getAll() {
  //   this.service.getAll().subscribe( (event: EntrainementsPlanning[]) => {
  //       this.events = event;
  //     },
  //     error => {
  //       alert(error.toString());
  //     });
  // }
  //
  // save(e: EntrainementsPlanning) {
  //   this.service.save(e).subscribe(
  //     () => {
  //       this.getAll();
  //     },
  //     error => {
  //     });
  // }
  //
  // handleEvent(action: string, event: CalendarEvent): void {
  // // handleEvent(action: string, event: CalendarEvent): void {
  //   this.modalData = { event, action };
  //   this.modal.open(this.modalContent, { size: 'lg' });
  // }
  //
  // deleteEvent(eventToDelete: CalendarEvent) {
  //   this.events = this.events.filter(event => event !== eventToDelete);
  // }
  //
  // // setView(view: CalendarView) {
  // //   this.view = view;
  // // }
  // //
  // // closeOpenMonthViewDay() {
  // //   this.activeDayIsOpen = false;
  // // }
  //
  // // dayClicked({ date, events }: { date: Date; events: EntrainementsPlanning[] }): void {
  // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  //   if (isSameMonth(date, this.viewDate)) {
  //     if (
  //       (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
  //       events.length === 0
  //     ) {
  //       this.activeDayIsOpen = false;
  //     } else {
  //       this.activeDayIsOpen = true;
  //     }
  //     this.viewDate = date;
  //   }
  // }
  // // externalDrop(event: EntrainementsPlanning) {
  // // // externalDrop(event: CalendarEvent) {
  // //   if (this.trainings.indexOf(event) === -1) {
  // //     this.events = this.events.filter(iEvent => iEvent !== event);
  // //     this.trainings.push(event);
  // //   }
  // // }
}
