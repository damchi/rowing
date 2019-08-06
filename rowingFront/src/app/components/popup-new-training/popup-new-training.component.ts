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

export class ErrorMessages  {
  name: StuctureError[];
  categorie: StuctureError[];
  distance: StuctureError[];
  membres: StuctureError[];
  season: StuctureError[];
}

export class PopupEntrainement  {
  training: Entrainements;
}

@Component({
  selector: 'app-popup-new-training',
  templateUrl: './popup-new-training.component.html',
  styleUrls: ['./popup-new-training.component.css']
})


export class PopupNewTrainingComponent implements OnInit {
  @Output()
  change: EventEmitter<MatRadioChange>;

  public trainForm: FormGroup;
  public errorMessages: ErrorMessages;
  public categories: Categories[];
  public roles: Roles[];
  public season: string;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: PopupEntrainement,
              public dialogPop: MatDialogRef<PopupNewTrainingComponent>,
              private service: PopupNewTrainingService,
              private serviceCat: CategoriesService,
              private serviceMembres: RolesService) { }



  ngOnInit() {

    this.trainForm = this.fb.group({
      name: new FormControl( this.data.training.name, [Validators.required]),
      comments: new FormControl( this.data.training.comments, [Validators.required]),
      season: new FormControl( this.data.training.season, [Validators.required]),
      categorie: new FormControl(this.data.training.category, [Validators.required]),
      membres: new FormControl( this.data.training.membre, [Validators.required]),
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
      membres: [
        {type: 'required', message: 'La catégories des membres est requise'}
      ],
      season: [
        {type: 'required', message: 'La saison de l\'entrainement est requise'}
      ]
    };
    this.getCategories();
    this.getCategoriesMembres();
  }

  getCategories() {
    this.serviceCat.getAll().subscribe( (categorie: Categories[]) => {
      this.categories = categorie;
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

    if (this.season === 'ete') {

      this.trainForm.addControl('distance', new FormControl( this.data.training.distance, [Validators.required]));
    }
  }

  create() {}
}
