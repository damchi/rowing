import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachTrainingRoutingModule } from './coach-training-routing.module';
import { CoachTrainingComponent } from './coach-training.component';
import {CoachTrainingService} from '../../services/coach-training.service';
import {MatButtonModule, MatTableModule} from '@angular/material';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [CoachTrainingComponent],
  imports: [
    CommonModule,
    CoachTrainingRoutingModule,
    MatTableModule,
    MatButtonModule,
    ShareModule,
  ],
  providers: [CoachTrainingService]
})
export class CoachTrainingModule { }
