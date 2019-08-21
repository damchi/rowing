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
    MatSnackBarModule
  ],
  entryComponents: [
    PopupNewTrainingComponent,
    PopupNewExerciceComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
