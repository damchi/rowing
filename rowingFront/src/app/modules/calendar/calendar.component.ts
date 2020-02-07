import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarService} from '../../services/calendar.service';
import {Component, OnChanges, Input, ViewChild, TemplateRef, OnInit} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction, collapseAnimation,
} from 'angular-calendar';
import {Subject} from 'rxjs';
import {Training} from '../../domaines/training';
import {TrainingPlanning} from '../../domaines/training-planning';
import {ServiceService} from '../../services/service.service';
import {MatDatepickerModule, MatDialog, MatNativeDateModule} from '@angular/material';
import {ConfirmDialogComponent} from '../../components/confirm-dialog/confirm-dialog.component';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {Color} from '../../domaines/color';
import {CoachTrainingService} from '../../services/coach-training.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [collapseAnimation],
  providers: [MatNativeDateModule, MatDatepickerModule]

})


export class CalendarComponent implements OnChanges, OnInit {
  @Input() trainings: Training[];
  refresh: Subject<any> = new Subject();
  view: string;
  viewDate: Date = new Date();
  events: TrainingPlanning[];
  event: TrainingPlanning;
  activeDayIsOpen: boolean;
  trainingCalendar: TrainingPlanning;

  constructor(private modal: NgbModal,
              private serviceCalendar: CalendarService,
              private serviceTraining: CoachTrainingService,
              public dialog: MatDialog,
              private alertService: ServiceService) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.view = 'month';
    this.activeDayIsOpen = false;
    this.getAll();
  }


  dayClicked({
               date,
               events
             }: {
    date: Date;
    events: CalendarEvent[];
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventDropped({
                 event,
                 newStart,
                 newEnd,
                 allDay
               }: any) {
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }

    if (event.end == null) {

      newStart = new Date(newStart);
      newStart.setHours(18, 0, 0);
      newEnd = newStart;
      newEnd.setHours(20, 0, 0);

      this.trainingCalendar = {
        start: newStart,
        end: newEnd,
        training: event,
        title: event.title,
        draggable: event.draggable,
      };

    } else {
      this.trainingCalendar = {
        id: event.id,
        start: newStart,
        end: newEnd,
        title: event.title,
      };
    }

    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.saveTrainingCalendar(this.trainingCalendar);
  }

  getAll() {
    this.serviceCalendar.getAll().subscribe(
      (trainingCalendar: TrainingPlanning[]) => {
        this.events = [];
        for (const calendar of trainingCalendar) {
          this.events.push({
            start: new Date(calendar.start),
            draggable: calendar.draggable,
            end: new Date(calendar.end),
            title: calendar.title,
            color: calendar.training.color,
            id: calendar.id,
            training: calendar.training,
          });
        }
      });
    this.refresh.next();
  }

  getAllTrainings() {
    this.serviceTraining.getAll().subscribe( (trainings: Training[]) => {
        this.trainings = trainings;
      },
      error => {
        alert(error.toString());
      });
  }

  trainingClicked(event: TrainingPlanning): void {

    const dialogPop = this.dialog.open(PopupNewTrainingComponent, {
      width: '750px',
      data: {
        id: event.id,
        training: event.training,
        colors: Color,
        // calendar: true,
        start: event.start,
        end: event.end
      }

    });

    dialogPop.afterClosed().subscribe(result => {
      if (result && result.updateAll) {
        this.saveTraining(result.training);
      } else {
        // this.saveTraining(result.training);
        this.saveTrainingCalendar(result.trainingCalendar);
        this.getAllTrainings();
      }
    });
  }

  saveTraining(training: Training) {
    this.serviceTraining.save(training).subscribe(
      () => {
        this.getAll();
      },
      error => {
        this.alertService.error(error);
      });
  }

  saveTrainingCalendar(event: TrainingPlanning) {
    this.serviceCalendar.save(event).subscribe(
      () => {
        this.getAll();
      },
      error => {
        this.alertService.error(error);
      });
  }

  externalDrop(event: TrainingPlanning) {
    if (this.events.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.events.push(event);
    }
  }


  deleteTrainingCalendar(event: TrainingPlanning) {
    this.event = event;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Suppression',
        message: 'Êtes-vous sûr de vouloir supprimer cet entrainement du calendrier?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doDelete();
      }
    });
  }

  doDelete() {
    this.serviceCalendar.delete(this.event.id, this.event).subscribe(() => {
        this.getAll();
      },
      error => {
        this.alertService.error(error);
      });
  }
}
