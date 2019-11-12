import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  exports: [  MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    ]
})
export class ShareModule { }
