import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatRadioChange} from '@angular/material';
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

export class ErrorMessages  {
  name: StuctureError[];
  categorie: StuctureError[];
  distance: StuctureError[];
  role: StuctureError[];
  season: StuctureError[];
  cadence: StuctureError[];
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
  change: EventEmitter<MatRadioChange>;

  public trainForm: FormGroup;
  public errorMessages: ErrorMessages;
  public categories: Categories[];
  public roles: Roles[];
  public exercicesDrill: Exercice[];
  public season: string;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: PopupEntrainement,
              public dialogPop: MatDialogRef<PopupNewTrainingComponent>,
              private service: PopupNewTrainingService,
              private serviceCat: CategoriesService,
              private serviceMembres: RolesService,
              private serviceExercice: CoachExerciceService) {
    super();

    if (this.data.training.season) {
      this.season = this.data.training.season;
    }
  }



  ngOnInit() {

    this.trainForm = this.fb.group({
      name: new FormControl( this.data.training.name, [Validators.required]),
      comments: new FormControl( this.data.training.comments, [Validators.required]),
      season: new FormControl( this.data.training.season, [Validators.required]),
      categorie: new FormControl(this.data.training.category, [Validators.required]),
      role: new FormControl( this.data.training.role, [Validators.required]),
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
      ]
    };
    this.getCategories();
    this.getCategoriesMembres();
    this.addControl();
    this.getExercices();
  }

  getCategories() {
    this.serviceCat.getAll().subscribe( (categorie: Categories[]) => {
      this.categories = categorie;
    });
  }

//   this.carrousels.map( e => {
//   if (idElem === e.id) {
//   e.position = event.currentIndex;
// } else {
//   e.position = this.carrousels.indexOf(e);
// }
// });

  getExercices() {
    this.serviceExercice.getAll().subscribe( (exercice: Exercice[]) => {
      this.exercicesDrill = exercice;
    });
  }

  getCategoriesMembres() {
    this.serviceMembres.getAll().subscribe( (roles: Roles[]) => {
      this.roles = roles;
    });
  }

  close() {
    this.dialogPop.close();
  }
  changeSeason(event: MatRadioChange) {
    this.season = event.value;
    this.addControl();
  }

  addControl() {
    if (this.season === 'ete' || this.data.training.season === 'ete') {

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

      if (t.season === 'ete') {
        e.cadence = t.cadence;
        e.start = t.start;
        e.distance = t.distance;
      }
      this.dialogPop.close({training: e});
    // } else {
    //   this.markAsTouched(this.trainForm);
    // }
  }
}
