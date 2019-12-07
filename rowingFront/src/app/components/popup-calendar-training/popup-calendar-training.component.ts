import {Component, Inject, OnInit} from '@angular/core';
import {EntrainementsPlanning} from '../../domaines/entrainements-planning';
import {MarkAsTouch} from '../../../utils/mark-as-touch';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StuctureError} from '../../../utils/stucture-error';
import {CalendarService} from '../../services/calendar.service';
import {Util} from '../../../utils/util';



export class ErrorMessages  {
  dateStart: StuctureError[];
  dateEnd: StuctureError[];
  timeStart: StuctureError[];
  timeEnd: StuctureError[];
}

export class PopupCalendar  {
  training: EntrainementsPlanning;
}


@Component({
  selector: 'app-popup-calendar-training',
  templateUrl: './popup-calendar-training.component.html',
  styleUrls: ['./popup-calendar-training.component.css'],

})
export class PopupCalendarTrainingComponent extends MarkAsTouch implements OnInit {

  public trainCalendarForm: FormGroup;
  public errorMessages: ErrorMessages;
  dateStart: string;
  timeEnd: string;
  timeStart: string;
  day: any;
  month: any;
  year: any;

  constructor(  @Inject(MAT_DIALOG_DATA) public data: PopupCalendar,
                public dialogPop: MatDialogRef<PopupCalendarTrainingComponent>,
                private service: CalendarService,
                private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.day = this.data.training.start.getDate();
    this.month = Util.getMoisFromDate(this.data.training.start.getMonth());
    this.year = this.data.training.start.getFullYear();

    this.dateStart = this.data.training.start ? Util.getDateString(this.data.training.start) : '';
    this.timeStart = this.data.training.start ? Util.getTimeString(this.data.training.start) : '';
    this.timeEnd = this.data.training.end ? Util.getTimeString(this.data.training.end) : '';

    this.trainCalendarForm = this.fb.group({
      dateStart: new FormControl( this.dateStart, [Validators.required]),
      dateEnd: new FormControl( this.dateStart, [Validators.required]),
      timeStart: new FormControl( this.timeStart),
      timeEnd: new FormControl( this.timeEnd, [Validators.required]),
    });

    this.errorMessages = {
      dateStart: [
        {type: 'required', message: 'La date est requise'}
      ],
      dateEnd: [
        {type: 'required', message: 'La date est requise'}
      ],
      timeStart: [
        {type: 'required', message: 'L\'heure de début est requise'}
      ],
      timeEnd: [
        {type: 'required', message: 'L\'heure de fin est requise'}
      ]
    };
  }

}
