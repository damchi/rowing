import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';



@NgModule({
  declarations: [PopupNewTrainingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  entryComponents: [PopupNewTrainingComponent],
  exports: [PopupNewTrainingComponent]

})
export class ShareModule { }


