import { Component, OnInit } from '@angular/core';
import {Training} from '../../domaines/training';
import {CoachTrainingService} from '../../services/coach-training.service';
import {MatDialog} from '@angular/material';
import {ServiceService} from '../../services/service.service';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {Color} from '../../domaines/color';
import {ConfirmDialogComponent} from '../../components/confirm-dialog/confirm-dialog.component';
import {TrainingPlanning} from "../../domaines/training-planning";

@Component({
  selector: 'app-coach-entrainements',
  templateUrl: './coach-training.component.html',
  styleUrls: ['./coach-training.component.css']
})
export class CoachTrainingComponent implements OnInit {
  public displayedColumns: string[] = ['nom', 'saison', 'type', 'role', 'entrainement', 'option'];
  public displayedColumnsMobile: string[] = ['nom', 'saison', 'role', 'option'];
  public trainings: Training[];
  public training: Training;

  constructor(private service: CoachTrainingService, public dialog: MatDialog, private alertService: ServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe( (trainings: Training[]) => {
        this.trainings = trainings;
      },
      error => {
        alert(error.toString());
      });
  }

  newTraining(training?: Training) {
    const dialogPop = this.dialog.open(PopupNewTrainingComponent, {
      width: '750px',
      data: { training: training || new Training() ,
        colors: Color || new Color(),
        // calendar: false,
        // eventDate: null
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result.training);
      }
    });

  }

  save(training: Training) {
    this.service.save(training).subscribe(
      () => {
        this.getAll();
      },
      error => {
        this.alertService.error(error);
      });
  }


  deleteTraining(training: Training) {
    this.training = training;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Suppression',
        message: 'Êtes-vous sûr de vouloir supprimer cet entrainement?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doDelete();
      }
    });
  }

  doDelete() {
    this.service.delete(this.training.id, this.training).subscribe(() => {
        this.getAll();
      },
      error => {
        this.alertService.error(error);
      });
  }


}
