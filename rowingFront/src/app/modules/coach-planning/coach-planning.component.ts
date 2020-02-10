import { Component, OnInit } from '@angular/core';
import {Training} from '../../domaines/training';
import {CoachTrainingService} from '../../services/coach-training.service';


@Component({
  selector: 'app-planning',
  templateUrl: './coach-planning.component.html',
  styleUrls: ['./coach-planning.component.css']
})
export class CoachPlanningComponent implements OnInit {
  trainings: Training[] = [];
  constructor(private serviceTraining: CoachTrainingService ) { }

  ngOnInit() {
    this.getAllTraining();
  }

  getAllTraining() {
    this.serviceTraining.getAll().subscribe( (trainings: Training[]) => {
        this.trainings = trainings;
      },
      error => {
        alert(error.toString());
      });
  }
}
