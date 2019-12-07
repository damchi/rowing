import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import {CoachMenuComponent} from '../../components/coach-menu/coach-menu.component';
import {
  MatButtonModule,
  MatMenuModule,
} from '@angular/material';


@NgModule({
  declarations: [CoachComponent, CoachMenuComponent],
  imports: [
    CommonModule,
    CoachRoutingModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class CoachModule { }
