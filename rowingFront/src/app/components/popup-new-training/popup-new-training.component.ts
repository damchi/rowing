import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSelectChange} from '@angular/material';
import {PopupNewTrainingService} from '../../services/popup-new-training.service';
import {Categories} from '../../domaines/categories';
import {Training} from '../../domaines/training';
import {StuctureError} from '../../../utils/stucture-error';
import {Roles} from '../../domaines/roles';
import {RolesService} from '../../services/roles.service';
import {MarkAsTouch} from '../../../utils/mark-as-touch';
import {Exercice} from '../../domaines/exercice';
import {CoachExerciceService} from '../../services/coach-exercice.service';
import {SeasonService} from '../../services/season.service';
import {Season} from '../../domaines/season';
import {ColorService} from '../../services/color.service';
import {Color} from '../../domaines/color';
import {CoachEntrainementsCategoriesService} from '../../services/coach-entrainements-categories.service';
import {Util} from '../../../utils/util';
import {TrainingPlanning} from '../../domaines/training-planning';
import {CoachTrainingService} from '../../services/coach-training.service';


export class ErrorMessages {
  title: StuctureError[];
  categorie: StuctureError[];
  entrainement: StuctureError[];
  role: StuctureError[];
  season: StuctureError[];
  cadence: StuctureError[];
  rest: StuctureError[];
  warmUp: StuctureError[];
  color: StuctureError[];
  exerciceMuscu: StuctureError[];
  exerciceCore: StuctureError[];
  dateStart: StuctureError[];
  timeStart: StuctureError[];
  timeEnd: StuctureError[];
}

export class PopupEntrainement {
  id: number;
  training: Training;
  colors: Color;
  // calendar: boolean;
  // eventStart: Date;
  end: Date;
  start: Date;
  title: string;
}

@Component({
  selector: 'app-popup-new-training',
  templateUrl: './popup-new-training.component.html',
  styleUrls: ['./popup-new-training.component.css']
})


export class PopupNewTrainingComponent extends MarkAsTouch implements OnInit {
  @Output()
  ChangeSelect: EventEmitter<MatSelectChange>;

  public trainForm: FormGroup;
  public errorMessages: ErrorMessages;
  public categories: Categories[];
  public roles: Roles[];
  public exercicesDrill: Exercice[];
  public exercicesMuscu: Exercice[];
  public exercicesCore: Exercice[];
  public exercices: Exercice[];
  public season: Season[];
  public seasonCurrent: number;
  public color: Color[];
  public timeEnd: string;
  public timeStart: string;
  public oldTraining: TrainingPlanning;


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: PopupEntrainement,
              public dialogPop: MatDialogRef<PopupNewTrainingComponent>,
              private service: PopupNewTrainingService,
              private serviceCoachTraining: CoachTrainingService,
              private serviceCategorieEntrainement: CoachEntrainementsCategoriesService,
              private serviceMembres: RolesService,
              private serviceExercice: CoachExerciceService,
              private  serviceSeason: SeasonService,
              private  serviceColor: ColorService) {
    super();

    if (this.data.training.season) {
      this.seasonCurrent = this.data.training.season.id;
    }
  }


  ngOnInit() {

    this.trainForm = this.fb.group({
      title: new FormControl(this.data.training.title, [Validators.required]),
      comments: new FormControl(this.data.training.comments),
      season: new FormControl(this.data.training.season, [Validators.required]),
      categorie: new FormControl(this.data.training.category, [Validators.required]),
      role: new FormControl(this.data.training.role, [Validators.required]),
      rest: new FormControl(this.data.training.rest, [Validators.required]),
      warmUp: new FormControl(this.data.training.warmUp, [Validators.required]),
      color: new FormControl(this.data.training.color, [Validators.required]),
      cadence: new FormControl(this.data.training.cadence, [Validators.required]),
      entrainement: new FormControl(this.data.training.entrainement, [Validators.required]),
    });

    if (this.data.start) {
      this.timeStart = this.data.start ? Util.getTimeString(this.data.start) : '';
      this.timeEnd = this.data.end ? Util.getTimeString(this.data.end) : '';

      this.trainForm.addControl('dateStart', new FormControl(this.data.start, [Validators.required]));
      this.trainForm.addControl('timeStart', new FormControl(this.timeStart, [Validators.required]));
      this.trainForm.addControl('timeEnd', new FormControl(this.timeEnd, [Validators.required]));

      this.oldTraining = this.data;
    }


    this.errorMessages = {
      title: [
        {type: 'required', message: 'La nom est requis'}
      ],
      categorie: [
        {type: 'required', message: 'La categorie est requise'}
      ],
      role: [
        {type: 'required', message: 'La catégories des membres est requise'}
      ],
      season: [
        {type: 'required', message: 'La saison de l\'entrainement est requise'}
      ],
      cadence: [
        {type: 'required', message: 'La vitesse est requise'}
      ],
      rest: [
        {type: 'required', message: 'La temps de repos est requis'}
      ],
      warmUp: [
        {type: 'required', message: 'L\'échauffement est requis'}
      ],
      color: [
        {type: 'required', message: 'La couleur est requise'}
      ],
      exerciceMuscu: [
        {type: 'required', message: 'Les exercices de musuclations sont requis'}
      ],
      exerciceCore: [
        {type: 'required', message: 'Les exercices de corps sont requis'}
      ],
      entrainement: [
        {type: 'required', message: 'L\' entrainement est requis'}
      ],
      dateStart: [
        {type: 'required', message: 'La date de début l\'entrainement est requise'}
      ],
      timeStart: [
        {type: 'required', message: 'L\'heure de début l\'entrainement est requise'}
      ],
      timeEnd: [
        {type: 'required', message: 'L\'heure de fin l\'entrainement est requise'}
      ]
    };

    this.getSeason();
    this.getCategoriesTraining();
    this.getCategoriesMembres();
    this.addControl();
    this.getExercices();
    this.getColor();
  }

  getCategoriesTraining() {
    this.serviceCategorieEntrainement.getAll().subscribe((categorie: Categories[]) => {
      this.categories = categorie;
      if (this.data.training.category) {
        const idCategories = this.data.training.category.map(e => e.id);
        this.trainForm.get('categorie').patchValue(this.categories.filter(e => idCategories.indexOf(e.id) !== -1));
      }
    });
  }


  getExercices() {
    this.serviceExercice.getAll().subscribe((exercices: Exercice[]) => {
      this.exercicesDrill = exercices.filter(e => e.typeExercices.id === 1);
      this.exercicesMuscu = exercices.filter(e => e.typeExercices.id === 2);
      this.exercicesCore = exercices.filter(e => e.typeExercices.id === 3);

      if (this.data.training.exercices) {
        for (const exercice of  this.data.training.exercices) {
          if (exercice.typeExercices.id === 1 && this.data.training.exercices.length > 0) {
            const idExerciceDrill = this.data.training.exercices.map(e => e.id);
            this.trainForm.get('exerciceDrill').patchValue(this.exercicesDrill.filter(e => idExerciceDrill.indexOf(e.id) !== -1));
          }

          if (exercice.typeExercices.id === 2 && this.data.training.exercices.length > 0) {
            const idExerciceMuscu = this.data.training.exercices.map(e => e.id);
            this.trainForm.get('exerciceMuscu').patchValue(this.exercicesMuscu.filter(e => idExerciceMuscu.indexOf(e.id) !== -1));
          }
          if (exercice.typeExercices.id === 3 && this.data.training.exercices.length > 0) {
            const idExerciceCore = this.data.training.exercices.map(e => e.id);
            this.trainForm.get('exerciceCore').patchValue(this.exercicesCore.filter(e => idExerciceCore.indexOf(e.id) !== -1));
          }
        }
      }
    });
  }

  getCategoriesMembres() {
    this.serviceMembres.getAll().subscribe((roles: Roles[]) => {

      this.roles = roles.filter(e => e.id !== 1 && e.id !== 2);
      if (this.data.training.role) {
        this.trainForm.get('role').patchValue(this.data.training.role.id);
      }
    });
  }

  getSeason() {
    this.serviceSeason.getAll().subscribe((season: Season[]) => {
      this.season = season;
      if (this.data.training.season) {
        this.trainForm.get('season').patchValue(this.data.training.season.id);
      }
    });
  }

  getColor() {
    this.serviceColor.getAll().subscribe((color: Color[]) => {
      this.color = color;
      if (this.data.training.color) {
        this.trainForm.get('color').patchValue(this.data.training.color.primary);
      }
    });
  }

  close() {
    this.dialogPop.close();
  }

  changeSeason(event: MatSelectChange) {
    if (this.seasonCurrent && this.seasonCurrent === 1) {
      this.trainForm.removeControl('strokesStart');
      this.data.training.strokesStart = null;
      this.trainForm.removeControl('exerciceDrill');
      this.exercicesDrill = null;

    }

    if (this.seasonCurrent && this.seasonCurrent === 2) {
      this.trainForm.removeControl('exerciceMuscu');
      this.trainForm.removeControl('exerciceCore');
      this.exercicesMuscu = null;
      this.exercicesCore = null;
    }
    this.seasonCurrent = event.value;
    this.addControl();
  }

  addControl() {
    if (this.seasonCurrent === 1 || (this.data.training.season && this.data.training.season.id === 1)) {
      this.trainForm.addControl('strokesStart', new FormControl(this.data.training.strokesStart));
      this.trainForm.addControl('exerciceDrill', new FormControl());
    }

    if (this.seasonCurrent === 2 || (this.data.training.season && this.data.training.season.id === 2)) {
      this.trainForm.addControl('exerciceMuscu', new FormControl());
      this.trainForm.addControl('exerciceCore', new FormControl());
    }
  }

  updateUnique() {

    if (this.trainForm.valid) {

      const newTraining = this.createTraining();
      newTraining.id = null;

      const t = this.trainForm.value;
      const calendarTraining = {
            id: this.data.id,
            start: t.dateStart,
            title: t.title,
            training: newTraining
          };

      if (this.data.start) {
      // if (this.data.start && (this.oldTraining.start !== this.data.start)) {
        this.dialogPop.close({updateAll: false, trainingCalendar: calendarTraining});
      } else {
        this.create();
      }

    } else {
      this.markAsTouched(this.trainForm);
    }
  }

  create() {
    if (this.trainForm.valid) {
      const e = this.createTraining();
      if (this.data.start && (this.oldTraining.start === this.data.start)) {
        this.dialogPop.close({training: e, updateAll: true});
      } else {
        this.updateUnique();
      }
    } else {
      this.markAsTouched(this.trainForm);
    }
  }

  createTraining() {
    const t = this.trainForm.value;
    const e = new Training();
    e.id = this.data.training.id;
    e.title = t.title;
    e.category = t.categorie;
    e.role = t.role;
    e.season = t.season;
    e.comments = t.comments;
    e.rest = t.rest;
    e.warmUp = t.warmUp;
    e.cadence = t.cadence;
    e.entrainement = t.entrainement;
    e.draggable = true;
    if (t.color.id === undefined) {
      const c = new Color();
      c.id = this.data.colors.id;
      c.primary = t.color;
      e.color = c;
    } else {
      e.color = t.color;
    }
    if (t.season === 1) {
      e.strokesStart = t.strokesStart;
      t.exerciceMuscu = null;
      t.exerciceCore = null;
      e.exercices = [...t.exerciceDrill];
    }
    if (t.season === 2) {
      e.strokesStart = null;
      t.exerciceDrill = null;
      e.exercices = [...t.exerciceCore, ...t.exerciceMuscu];

    }

    return e;
  }
}
