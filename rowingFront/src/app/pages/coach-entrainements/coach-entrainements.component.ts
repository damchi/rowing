import { Component, OnInit } from '@angular/core';
import {Entrainements} from '../../domaines/entrainements';
import {CoachEntrainementsService} from '../../services/coach-entrainements.service';
import {MatDialog} from '@angular/material';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {ServiceService} from '../../services/service.service';
import {ConfirmDialogComponent} from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-entrainements',
  templateUrl: './coach-entrainements.component.html',
  styleUrls: ['./coach-entrainements.component.css']
})
export class CoachEntrainementsComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'type', 'role', 'start', 'distance', 'option'];
  trainings: Entrainements[];
  training: Entrainements;

  constructor(private service: CoachEntrainementsService, public dialog: MatDialog, private alertService: ServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe( (trainings: Entrainements[]) => {
        this.trainings = trainings;
      },
      error => {
        alert(error.toString());
      });
  }

  newTraining(training?: Entrainements) {
    const dialogPop = this.dialog.open(PopupNewTrainingComponent, {
      width: '750px',
      data: {training: training || new Entrainements()}
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result.training);
      }
    });

  }

  save(training: Entrainements) {
    if (training.id) {
      this.service.update(training.id, training).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    } else {
      this.service.save(training).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    }
  }


deleteTraining(training: Entrainements) {
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
