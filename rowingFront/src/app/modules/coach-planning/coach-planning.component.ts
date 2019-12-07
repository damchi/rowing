import { Component, OnInit } from '@angular/core';
import {Entrainements} from '../../domaines/entrainements';
import {CoachEntrainementsService} from '../../services/coach-entrainements.service';


@Component({
  selector: 'app-planning',
  templateUrl: './coach-planning.component.html',
  styleUrls: ['./coach-planning.component.css']
})
export class CoachPlanningComponent implements OnInit {
  trainings: Entrainements[] = [];
  constructor(private serviceTraining: CoachEntrainementsService ) { }

  ngOnInit() {
    this.getAllTraining();
  }

  getAllTraining() {
    this.serviceTraining.getAll().subscribe( (trainings: Entrainements[]) => {
        this.trainings = trainings;
      },
      error => {
        alert(error.toString());
      });
  }
}
