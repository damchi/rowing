import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { EntrainementsComponent } from './pages/entrainements/entrainements.component';
import {CoachComponent} from './pages/coach/coach.component';
import {MatMenuModule} from '@angular/material/menu';
import { PlanningComponent } from './pages/planning/planning.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CoachMenuComponent } from './components/coach-menu/coach-menu.component';
import { PopupNewTrainingComponent } from './components/popup-new-training/popup-new-training.component';
import {MatRadioModule} from '@angular/material/radio';






@NgModule({
  declarations: [
    AppComponent,
    EntrainementsComponent,
    CoachComponent,
    PlanningComponent,
    CategoriesComponent,
    CoachMenuComponent,
    PopupNewTrainingComponent,
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
    MatRadioModule
  ],
  entryComponents: [PopupNewTrainingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
