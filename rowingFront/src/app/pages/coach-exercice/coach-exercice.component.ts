import { Component, OnInit } from '@angular/core';
import {CoachExerciceService} from '../../services/coach-exercice.service';
import {MatDialog} from '@angular/material';
import {Exercice} from '../../domaines/exercice';
import {PopupNewExerciceComponent} from '../../components/popup-new-exercice/popup-new-exercice.component';
import {ServiceService} from '../../services/service.service';


@Component({
  selector: 'app-coach-exercice',
  templateUrl: './coach-exercice.component.html',
  styleUrls: ['./coach-exercice.component.css']
})
export class CoachExerciceComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'type', 'option'];
  exercices: Exercice[];
  constructor(private service: CoachExerciceService, public dialog: MatDialog, private alertService: ServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe( (trainings: Exercice[]) => {
        this.exercices = trainings;
      },
      error => {
        alert(error.toString());
      });
  }

  newExercice(exercice?: Exercice) {
    const dialogPop = this.dialog.open(PopupNewExerciceComponent, {
      width: '750px',
      data: {exercice: exercice || new Exercice()}
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result.exercice);
      }
    });

  }

  save(exercice: Exercice) {
    if (exercice.id) {
      this.service.update(exercice.id, exercice).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    } else {
      this.service.save(exercice).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    }
  }

  deleteExercice(exercice: Exercice) {}

}
