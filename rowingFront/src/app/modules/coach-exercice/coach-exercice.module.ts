import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module';
import {PopupNewExerciceComponent} from '../../components/popup-new-exercice/popup-new-exercice.component';
import {CoachExerciceService} from '../../services/coach-exercice.service';
import {CoachExerciceRoutingModule} from './coach-exercice-routing.module';
import {CoachExerciceComponent} from './coach-exercice.component';



@NgModule({
  declarations: [CoachExerciceComponent, PopupNewExerciceComponent],
  imports: [
    CommonModule,
    CoachExerciceRoutingModule,
    ShareModule
  ],
  entryComponents: [PopupNewExerciceComponent],
  providers: [CoachExerciceService]
})
export class CoachExerciceModule { }
