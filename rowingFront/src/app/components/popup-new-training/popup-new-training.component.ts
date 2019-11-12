import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatRadioChange, MatSelectChange} from '@angular/material';
import {PopupNewTrainingService} from '../../services/popup-new-training.service';
import {CoachTypeExerciceService} from '../../services/coach-type-exercice.service';
import {Categories} from '../../domaines/categories';
import {Entrainements} from '../../domaines/entrainements';
import {StuctureError} from '../../utils/stucture-error';
import {Roles} from '../../domaines/roles';
import {RolesService} from '../../services/roles.service';
import {MarkAsTouch} from '../../utils/mark-as-touch';
import {Exercice} from '../../domaines/exercice';
import {CoachExerciceService} from '../../services/coach-exercice.service';
import {SeasonService} from '../../services/season.service';
import {Season} from '../../domaines/season';
import {ColorService} from '../../services/color.service';
import {Color} from '../../domaines/color';
import {CoachEntrainementsCategoriesService} from '../../services/coach-entrainements-categories.service';

export class ErrorMessages  {
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
}

export class PopupEntrainement  {
  training: Entrainements;
  colors: Color;
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
  // public exercicesErgo: Exercice[];
  public exercicesCore: Exercice[];
  public season: Season[];
  public seasonCurrent: number;
  public color: Color[];

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: PopupEntrainement,
              public dialogPop: MatDialogRef<PopupNewTrainingComponent>,
              private service: PopupNewTrainingService,
              private serviceCategorieEntrainement: CoachEntrainementsCategoriesService,
              private serviceMembres: RolesService,
              private serviceExercice: CoachExerciceService,
              private  serviceSeason: SeasonService,
              private  serviceColor: ColorService ) {
    super();

    if (this.data.training.season) {
      this.seasonCurrent = this.data.training.season.id;
    }
  }



  ngOnInit() {

    this.trainForm = this.fb.group({
      title: new FormControl( this.data.training.title, [Validators.required]),
      comments: new FormControl( this.data.training.comments),
      season: new FormControl( this.data.training.season, [Validators.required]),
      categorie: new FormControl(this.data.training.category, [Validators.required]),
      role: new FormControl( this.data.training.role, [Validators.required]),
      rest: new FormControl( this.data.training.rest, [Validators.required]),
      warmUp: new FormControl( this.data.training.warmUp, [Validators.required]),
      color: new FormControl( this.data.training.color, [Validators.required]),
      cadence: new FormControl( this.data.training.cadence, [Validators.required]),
      entrainement: new FormControl( this.data.training.entrainement, [Validators.required]),
  });


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
    this.serviceCategorieEntrainement.getAll().subscribe( (categorie: Categories[]) => {
      this.categories = categorie;
      if (this.data.training.category) {
        const idCategories = this.data.training.category.map(e => e.id);
        this.trainForm.get('categorie').patchValue( this.categories.filter( e => idCategories.indexOf(e.id) !== -1));
      }
    });
  }


  getExercices() {
    this.serviceExercice.getAll().subscribe( (exercices: Exercice[]) => {
    this.exercicesDrill = exercices.filter( e => e.typeExercices.id === 1);
    this.exercicesMuscu = exercices.filter( e => e.typeExercices.id === 2);
    this.exercicesCore = exercices.filter( e => e.typeExercices.id === 3);
      // this.exercicesErgo = exercices.filter( e => e.typeExercices.id === 4);

    if (this.data.training.exerciceDrill && this.data.training.exerciceDrill.length > 0) {
      const idExerciceDrill = this.data.training.exerciceDrill.map(e => e.id);
      this.trainForm.get('exerciceDrill').patchValue( this.exercicesDrill.filter( e => idExerciceDrill.indexOf(e.id) !== -1));
    }
    if (this.data.training.exerciceMuscu && this.data.training.exerciceMuscu.length > 0) {
      const idExerciceMuscu = this.data.training.exerciceMuscu.map(e => e.id);
      this.trainForm.get('exerciceMuscu').patchValue( this.exercicesMuscu.filter( e => idExerciceMuscu.indexOf(e.id) !== -1));
    }
    if (this.data.training.exerciceCore && this.data.training.exerciceCore.length > 0) {
      const idExerciceCore = this.data.training.exerciceCore.map(e => e.id);
      this.trainForm.get('exerciceCore').patchValue( this.exercicesCore.filter( e => idExerciceCore.indexOf(e.id) !== -1));
    }
});
  }

  getCategoriesMembres() {
    this.serviceMembres.getAll().subscribe( (roles: Roles[]) => {

      this.roles = roles.filter( e =>  e.id !== 1 && e.id !== 2 ) ;
      if (this.data.training.role) {
        this.trainForm.get('role').patchValue(this.data.training.role.id);
      }
    });
  }

  getSeason() {
    this.serviceSeason.getAll().subscribe( (season: Season[]) => {
      this.season = season;
      if (this.data.training.season) {
        this.trainForm.get('season').patchValue(this.data.training.season.id);
      }
    });
  }

  getColor() {
    this.serviceColor.getAll().subscribe( (color: Color[]) => {
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
      this.trainForm.removeControl('exerciceDrill');
      this.data.training.strokesStart = null;
      this.data.training.exerciceDrill = null;
    }
    if (this.seasonCurrent && this.seasonCurrent === 2) {
      this.trainForm.removeControl('exerciceMuscu');
      this.trainForm.removeControl('exerciceCore');
      this.data.training.exerciceMuscu = null;
      this.data.training.exerciceCore = null;
    }
    this.seasonCurrent = event.value;
    this.addControl();
  }

  addControl() {
    if (this.seasonCurrent === 1 || ( this.data.training.season && this.data.training.season.id === 1)) {
      this.trainForm.addControl('strokesStart', new FormControl( this.data.training.strokesStart));
      this.trainForm.addControl('exerciceDrill', new FormControl( this.data.training.exerciceDrill));
    }

    if (this.seasonCurrent === 2 || ( this.data.training.season && this.data.training.season.id === 2)) {
      this.trainForm.addControl('exerciceMuscu', new FormControl( this.data.training.exerciceMuscu));
      this.trainForm.addControl('exerciceCore', new FormControl( this.data.training.exerciceCore));
    }
  }

  create() {
    if (this.trainForm.valid) {
      const t = this.trainForm.value;
      const e = new Entrainements();
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



      if (t.color.id === undefined) {
        const c = new Color();
        c.id = this.data.colors.id;
        c.primary = t.color;
        e.color = c ;
      } else {
        e.color = t.color;
      }


      if (t.season === 1) {
        e.strokesStart = t.strokesStart;
        e.exerciceDrill = t.exerciceDrill;
        e.exerciceMuscu = null;
        e.exerciceCore = null;

      }

      if (t.season === 2) {
        e.exerciceMuscu = t.exerciceMuscu;
        e.exerciceCore = t.exerciceCore;
        e.strokesStart = null;
        e.exerciceDrill = null;
      }
      this.dialogPop.close({training: e});
    } else {
      this.markAsTouched(this.trainForm);
    }
  }
}
