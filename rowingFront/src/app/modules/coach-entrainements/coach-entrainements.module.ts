import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachEntrainementsRoutingModule } from './coach-entrainements-routing.module';
import { CoachEntrainementsComponent } from './coach-entrainements.component';
import {CoachEntrainementsService} from '../../services/coach-entrainements.service';
import {MatButtonModule, MatTableModule} from '@angular/material';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [CoachEntrainementsComponent],
  imports: [
    CommonModule,
    CoachEntrainementsRoutingModule,
    MatTableModule,
    MatButtonModule,
    ShareModule,
  ],
  providers: [CoachEntrainementsService]
})
export class CoachEntrainementsModule { }
