import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ServiceService} from '../../services/service.service';
import {CoachTypeExerciceService} from '../../services/coach-type-exercice.service';
import {PopupNewExerciceComponent} from '../../components/popup-new-exercice/popup-new-exercice.component';
import {PopupNewTypeExerciceComponent} from '../../components/popup-new-type-exercice/popup-new-type-exercice.component';
import {TypeExercice} from '../../domaines/type-exercice';

@Component({
  selector: 'app-coach-type-exercice',
  templateUrl: './coach-type-exercice.component.html',
  styleUrls: ['./coach-type-exercice.component.css']
})
export class CoachTypeExerciceComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'description', 'option'];
  TypeExercice: TypeExercice[];


  constructor(private service: CoachTypeExerciceService, public dialog: MatDialog, private alertService: ServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe( (type: TypeExercice[]) => {
        this.TypeExercice = type;
      },
      error => {
        alert(error.toString());
      });
  }

  newCategorie(type?: TypeExercice) {
    const dialogPop = this.dialog.open(PopupNewTypeExerciceComponent, {
      width: '750px',
      data: {type: type || new TypeExercice()}
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result.typeExercice);
      }
    });

  }


  save(type: TypeExercice) {
    if (type.id) {
      this.service.update(type.id, type).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    } else {
      this.service.save(type).subscribe(
        () => {
          this.getAll();
        },
        error => {
          this.alertService.error(error);
        });
    }
  }

  deleteCategorie(exercice: TypeExercice) {}


}
