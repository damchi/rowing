import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSelectModule} from '@angular/material';
import {CoachComponent} from './pages/coach/coach.component';
import {MatMenuModule} from '@angular/material/menu';
import { CoachPlanningComponent } from './modules/coach-planning/coach-planning.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CoachMenuComponent } from './components/coach-menu/coach-menu.component';
import { PopupNewTrainingComponent } from './components/popup-new-training/popup-new-training.component';
import {MatRadioModule} from '@angular/material/radio';
import { CoachExerciceComponent } from './modules/coach-exercice/coach-exercice.component';
import { PopupNewExerciceComponent } from './components/popup-new-exercice/popup-new-exercice.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupCalendarTrainingComponent} from './components/popup-calendar-training/popup-calendar-training.component';
import { PopupNewTypeExerciceComponent } from './components/popup-new-type-exercice/popup-new-type-exercice.component';


@NgModule({
  declarations: [
    AppComponent,
    // CoachPlanningComponent,
    // CoachExerciceComponent,
    // PopupNewExerciceComponent,
    ConfirmDialogComponent,
    // CalendarComponent,
    // CalendarHeaderComponent,
    PopupCalendarTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // MatFormFieldModule,
    // MatSelectModule,
    // MatInputModule,
    // MatTableModule,
    // MatButtonModule,
    // MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatRadioModule,
    MatSnackBarModule,

    DragAndDropModule,
    CommonModule,
    // NgbModalModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // }),
  ],
  entryComponents: [
    // PopupNewExerciceComponent,
    ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [CalendarComponent],
})
export class AppModule { }
