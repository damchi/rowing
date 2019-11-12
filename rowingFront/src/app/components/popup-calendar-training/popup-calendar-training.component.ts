import {Component, Inject, OnInit} from '@angular/core';
import {EntrainementsPlanning} from '../../domaines/entrainements-planning';
import {MarkAsTouch} from '../../utils/mark-as-touch';
import {MAT_DIALOG_DATA} from '@angular/material';

export class PopupCalendar  {
  training: EntrainementsPlanning;
  actions: string;
}


@Component({
  selector: 'app-popup-calendar-training',
  templateUrl: './popup-calendar-training.component.html',
  styleUrls: ['./popup-calendar-training.component.css']
})
export class PopupCalendarTrainingComponent extends MarkAsTouch implements OnInit {

  constructor(  @Inject(MAT_DIALOG_DATA) public data: PopupCalendar) {
    super();
  }

  ngOnInit() {
  }

}
