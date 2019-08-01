import { Component, OnInit } from '@angular/core';
import {Entrainements} from '../../domaines/entrainements';
import {EntrainementsService} from '../../services/entrainements.service';
import {MatDialog} from '@angular/material';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
// import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';

@Component({
  selector: 'app-entrainements',
  templateUrl: './entrainements.component.html',
  styleUrls: ['./entrainements.component.css']
})
export class EntrainementsComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'type', 'membres', 'start', 'distance', 'option'];
  trainings: Entrainements[];

  constructor(private service: EntrainementsService, public dialog: MatDialog) { }

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
    this.service.save(training).subscribe(
      () => {
        this.getAll();
      },
      (e: any) => {
        alert(e.toString());
      });

  }

  deleteTraining(training: Entrainements) {}



}
