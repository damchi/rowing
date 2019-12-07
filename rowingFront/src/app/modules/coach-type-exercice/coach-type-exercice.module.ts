import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTypeExerciceRoutingModule } from './coach-type-exercice-routing.module';
import { CoachTypeExerciceComponent } from './coach-type-exercice.component';
import {PopupNewTypeExerciceComponent} from '../../components/popup-new-type-exercice/popup-new-type-exercice.component';
import {CoachTypeExerciceService} from '../../services/coach-type-exercice.service';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CoachTypeExerciceComponent, PopupNewTypeExerciceComponent],
  imports: [
    CommonModule,
    CoachTypeExerciceRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  entryComponents: [PopupNewTypeExerciceComponent],
  providers: [CoachTypeExerciceService]
})
export class CoachTypeExerciceModule { }
