import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachEntrainementsRoutingModule } from './coach-entrainements-routing.module';
import { CoachEntrainementsComponent } from './coach-entrainements.component';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {ShareModule} from '../share/share.module';
import {CoachEntrainementsService} from '../../services/coach-entrainements.service';


@NgModule({
  declarations: [CoachEntrainementsComponent, PopupNewTrainingComponent],
  imports: [
    CommonModule,
    CoachEntrainementsRoutingModule,
    ShareModule
  ],
  entryComponents: [PopupNewTrainingComponent],
  providers: [CoachEntrainementsService]
})
export class CoachEntrainementsModule { }
