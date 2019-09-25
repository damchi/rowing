import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSelectModule} from '@angular/material';
import { CoachEntrainementsComponent } from './pages/coach-entrainements/coach-entrainements.component';
import {CoachComponent} from './pages/coach/coach.component';
import {MatMenuModule} from '@angular/material/menu';
import { CoachPlanningComponent } from './pages/coach-planning/coach-planning.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CoachCategoriesComponent } from './pages/coach-categories/coach-categories.component';
import { CoachMenuComponent } from './components/coach-menu/coach-menu.component';
import { PopupNewTrainingComponent } from './components/popup-new-training/popup-new-training.component';
import {MatRadioModule} from '@angular/material/radio';
import { CoachExerciceComponent } from './pages/coach-exercice/coach-exercice.component';
import { PopupNewExerciceComponent } from './components/popup-new-exercice/popup-new-exercice.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule  } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';









@NgModule({
  declarations: [
    AppComponent,
    CoachEntrainementsComponent,
    CoachComponent,
    CoachPlanningComponent,
    CoachCategoriesComponent,
    CoachMenuComponent,
    PopupNewTrainingComponent,
    CoachExerciceComponent,
    PopupNewExerciceComponent,
    ConfirmDialogComponent,
    CalendarComponent,
    CalendarHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSnackBarModule,
    DragAndDropModule,
    CommonModule,
    CalendarModule,
    TreeViewModule,
    DropDownListAllModule,
    MultiSelectAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    ToolbarAllModule,
    ContextMenuAllModule,
    ButtonAllModule,
    CheckBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    NumericTextBoxAllModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule
  ],
  entryComponents: [
    PopupNewTrainingComponent,
    PopupNewExerciceComponent,
    ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CalendarComponent],
})
export class AppModule { }
