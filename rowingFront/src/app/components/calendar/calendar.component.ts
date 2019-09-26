import {Component, ChangeDetectionStrategy, OnChanges, Input} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { Subject } from 'rxjs';
import {Entrainements} from '../../domaines/entrainements';
import {EntrainementsPlanning} from '../../domaines/entrainements-planning';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CalendarComponent implements  OnChanges {
  @Input() trainings: Entrainements[];
  CalendarView = CalendarView;
  view = CalendarView.Month;
  viewDate = new Date();
  // externalEvents: CalendarEvent[] = [
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
  //     color: {
  //       primary: '#1e90ff',
  //       secondary: '#D1E8FF'
  //     },
  //     start: new Date(),
  //     draggable: true
  //   }
  // ];



  // events: CalendarEvent[] = [];
  events: Entrainements[] = [];

  activeDayIsOpen = false;
  refresh = new Subject<void>();

  constructor() {
  }
  ngOnChanges() {}

  eventDropped({
                 event,
                 newStart,
                 newEnd,
                 allDay
               }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.trainings.indexOf(event);
    // const externalIndex = this.externalEvents.indexOf(event);
    // if (typeof allDay !== 'undefined') {
    //   event.allDay = allDay;
    // }
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

  // externalDrop(event: CalendarEvent) {
  //   if (this.externalEvents.indexOf(event) === -1) {
  //     this.events = this.events.filter(iEvent => iEvent !== event);
  //     this.externalEvents.push(event);
  //   }
  // }

  externalDrop(event: Entrainements) {
    if (this.trainings.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      // this.trainings.push(event);
      this.events.push(event);
    }
  }
}
