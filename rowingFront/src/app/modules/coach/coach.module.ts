import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import {CoachMenuComponent} from '../../components/coach-menu/coach-menu.component';
import {CoachExerciceComponent} from '../coach-exercice/coach-exercice.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [CoachComponent, CoachMenuComponent],
  imports: [
    CommonModule,
    CoachRoutingModule,
    MatMenuModule,
    ShareModule
  ],
})
export class CoachModule { }
