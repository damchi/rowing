import { Component, OnInit } from '@angular/core';
import {CalendarView} from 'angular-calendar';


@Component({
  selector: 'app-planning',
  templateUrl: './coach-planning.component.html',
  styleUrls: ['./coach-planning.component.css']
})
export class CoachPlanningComponent implements OnInit {
  CalendarView = CalendarView;

  view = CalendarView.Month;

  viewDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
