import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTypeExerciceRoutingModule } from './coach-type-exercice-routing.module';
import { CoachTypeExerciceComponent } from './coach-type-exercice.component';
import {ShareModule} from '../share/share.module';
import {PopupNewTypeExerciceComponent} from '../../components/popup-new-type-exercice/popup-new-type-exercice.component';
import {CoachTypeExerciceService} from '../../services/coach-type-exercice.service';


@NgModule({
  declarations: [CoachTypeExerciceComponent, PopupNewTypeExerciceComponent],
  imports: [
    CommonModule,
    CoachTypeExerciceRoutingModule,
    ShareModule
  ],
  entryComponents: [PopupNewTypeExerciceComponent],
  providers: [CoachTypeExerciceService]
})
export class CoachTypeExerciceModule { }
