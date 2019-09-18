import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatRadioChange, MatSelectChange} from '@angular/material';
import {PopupNewTrainingService} from '../../services/popup-new-training.service';
import {CategoriesService} from '../../services/categories.service';
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

export class ErrorMessages  {
  name: StuctureError[];
  categorie: StuctureError[];
  distance: StuctureError[];
  role: StuctureError[];
  season: StuctureError[];
  cadence: StuctureError[];
  rest: StuctureError[];
  warmUp: StuctureError[];
}

export class PopupEntrainement  {
  training: Entrainements;
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
  public exercicesErgo: Exercice[];
  public exercicesCorps: Exercice[];
  public season: Season[];
  public seasonCurrent: number;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: PopupEntrainement,
              public dialogPop: MatDialogRef<PopupNewTrainingComponent>,
              private service: PopupNewTrainingService,
              private serviceCat: CategoriesService,
              private serviceMembres: RolesService,
              private serviceExercice: CoachExerciceService,
              private  serviceSeason: SeasonService) {
    super();

    if (this.data.training.season) {
      this.seasonCurrent = this.data.training.season.id;
    }
  }



  ngOnInit() {

    this.trainForm = this.fb.group({
      name: new FormControl( this.data.training.name, [Validators.required]),
      comments: new FormControl( this.data.training.comments, [Validators.required]),
      season: new FormControl( this.data.training.season, [Validators.required]),
      categorie: new FormControl(this.data.training.category, [Validators.required]),
      role: new FormControl( this.data.training.role, [Validators.required]),
      rest: new FormControl( this.data.training.rest, [Validators.required]),
      warmUp: new FormControl( this.data.training.warmUp, [Validators.required]),
    });


    this.errorMessages = {
      name: [
        {type: 'required', message: 'La nom est requis'}
      ],
      categorie: [
        {type: 'required', message: 'La categorie est requise'}
      ],
      distance: [
        {type: 'required', message: 'La distance est requise'}
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
        {type: 'required', message: 'La temps de repos est requis'}
      ]
    };
    this.getSeason();
    this.getCategories();
    this.getCategoriesMembres();
    this.addControl();
    this.getExercices();
  }

  getCategories() {
    this.serviceCat.getAll().subscribe( (categorie: Categories[]) => {
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
    this.exercicesErgo = exercices.filter( e => e.typeExercices.id === 2);
    this.exercicesMuscu = exercices.filter( e => e.typeExercices.id === 3);
    this.exercicesCorps = exercices.filter( e => e.typeExercices.id === 4);
    if (  this.data.training.exercices) {
      const idExercices = this.data.training.exercices.map(e => e.id);
      this.trainForm.get('exercice').patchValue( this.exercicesDrill.filter( e => idExercices.indexOf(e.id) !== -1));
    }
});
  }

  getCategoriesMembres() {
    this.serviceMembres.getAll().subscribe( (roles: Roles[]) => {
      this.roles = roles;
      if (this.data.training.role) {
        this.trainForm.get('role').patchValue(this.data.training.role.id);
        // this.trainForm.get('role').patchValue(this.roles.filter(e => this.data.training.role.id !== -1 ));
      }
    });
  }

  getSeason() {
    this.serviceSeason.getAll().subscribe( (season: Season[]) => {
      this.season = season;
      if (this.data.training.season) {
        this.trainForm.get('season').patchValue(this.season.find(e => this.data.training.season.id !== -1 ));
      }
    });
  }

  close() {
    this.dialogPop.close();
  }
  changeSeason(event: MatSelectChange) {
    if (this.seasonCurrent && this.seasonCurrent === 1) {
      this.trainForm.removeControl('distance');
      this.trainForm.removeControl('cadence');
      this.trainForm.removeControl('start');
      this.trainForm.removeControl('exercice');
      this.trainForm.removeControl('repos');
      this.data.training.distance = null;
      this.data.training.cadence = null;
      this.data.training.start = null;
      this.data.training.exercices = null;
      this.data.training.rest = null;
    }
    this.seasonCurrent = event.value.id;
    this.addControl();
  }

  addControl() {
    if (this.seasonCurrent === 1 || ( this.data.training.season && this.data.training.season.id === 1)) {
      this.trainForm.addControl('distance', new FormControl( this.data.training.distance, [Validators.required]));
      this.trainForm.addControl('cadence', new FormControl( this.data.training.cadence, [Validators.required]));
      this.trainForm.addControl('start', new FormControl( this.data.training.start));
      this.trainForm.addControl('exercice', new FormControl( this.data.training.exercices));
    }
  }

  create() {
    // if (this.trainForm.valid) {
      const t = this.trainForm.value;
      const e = new Entrainements();
      e.id = this.data.training.id;
      e.name = t.name;
      e.category = t.categorie;
      e.role = t.role;
      e.season = t.season;
      e.comments = t.comments;
      e.rest = t.rest;
      e.warmUp = t.warmUp;

      if (t.season.id === 1) {
        e.cadence = t.cadence;
        e.start = t.start;
        e.distance = t.distance;
        e.exercices = t.exercice;
      }
      this.dialogPop.close({training: e});
    // } else {
    //   this.markAsTouched(this.trainForm);
    // }
  }
}
