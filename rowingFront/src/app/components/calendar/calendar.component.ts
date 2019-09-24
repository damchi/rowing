import {Component, ChangeDetectionStrategy, Input, OnInit, OnChanges} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { Subject } from 'rxjs';
import {Entrainements} from '../../domaines/entrainements';
import {CoachEntrainementsService} from '../../services/coach-entrainements.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
// export class CalendarComponent  {
export class CalendarComponent implements OnChanges {

  @Input() training: Entrainements[];
  public CalendarView = CalendarView;
  public view = CalendarView.Month;
  public viewDate = new Date();
  public events: CalendarEvent[] = [];
  public activeDayIsOpen = false;
  public refresh = new Subject<void>();
  // public externalEvents: Entrainements[];
  public externalEvents: CalendarEvent[] = [];
  //   = [
  //   {
  //     title: 'Event 1',
  //     color: {
  //       primary: '#e3bc08',
  //       secondary: '#FDF1BA'
  //     },
  //     start: new Date(),
  //     draggable: true
  //   },
  //   {
  //     title: 'Event 2',
  //     color:  {
  //       primary: '#1e90ff',
  //       secondary: '#D1E8FF'
  //     },
  //     start: new Date(),
  //     draggable: true
  //   }
  // ];


  constructor(private serviceTraining: CoachEntrainementsService) {
  }

  ngOnChanges() {


  }



  eventDropped({
                 event,
                 newStart,
                 newEnd,
                 allDay
               }: CalendarEventTimesChangedEvent): void {

    // this.externalEvents = this.event.map( e => {
    //   return {
    //     start: newStart,
    //     end: newEnd,
    //     title: e.name,
    //     color: e.color,
    //     draggable: e.draggable,
    //     training: e};
    // });
    event.start = newStart;
    this.externalEvents.push(event);

    // const k =event;
    const t = this.training;
    const j = this.externalEvents;
    const externalIndex = this.externalEvents.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      // this.externalEvents.splice(externalIndex, 1);
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

  // externalDrop(event: Entrainements) {
  externalDrop(event: CalendarEvent) {
    if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.externalEvents.push(event);
    }
  }
}
