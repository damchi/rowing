import { Component, OnInit } from '@angular/core';
import {Entrainements} from '../../domaines/entrainements';
import {CoachEntrainementsService} from '../../services/coach-entrainements.service';
import {EntrainementsPlanning} from '../../domaines/entrainements-planning';
import {CalendarService} from '../../services/calendar.service';


@Component({
  selector: 'app-planning',
  templateUrl: './coach-planning.component.html',
  styleUrls: ['./coach-planning.component.css']
})
export class CoachPlanningComponent implements OnInit {
  trainings: Entrainements[] = [];
  events: EntrainementsPlanning[] = [];
  constructor(private serviceTraining: CoachEntrainementsService ) { }
  // constructor(private serviceTraining: CoachEntrainementsService, private serviceTrainingPlanning: CalendarService ) { }

  ngOnInit() {
    this.getAllTraining();
    // this.getAllTrainingCalendar();
  }

  getAllTraining() {
    this.serviceTraining.getAll().subscribe( (trainings: Entrainements[]) => {
        this.trainings = trainings;
      },
      error => {
        alert(error.toString());
      });
  }


  // getAllTrainingCalendar() {
  //   this.serviceTrainingPlanning.getAll().subscribe( (events: EntrainementsPlanning[]) => {
  //       this.events = events;
  //     },
  //     error => {
  //       alert(error.toString());
  //     });
  // }


}
