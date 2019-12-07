import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupNewExerciceComponent} from '../../components/popup-new-exercice/popup-new-exercice.component';
import {CoachExerciceService} from '../../services/coach-exercice.service';
import {CoachExerciceRoutingModule} from './coach-exercice-routing.module';
import {CoachExerciceComponent} from './coach-exercice.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CoachExerciceComponent, PopupNewExerciceComponent],
  imports: [
    CommonModule,
    CoachExerciceRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  entryComponents: [PopupNewExerciceComponent],
  providers: [CoachExerciceService]
})
export class CoachExerciceModule { }
