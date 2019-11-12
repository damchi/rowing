import {Component, Inject, OnInit} from '@angular/core';
import {StuctureError} from '../../utils/stucture-error';
import {Exercice} from '../../domaines/exercice';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeExercice} from '../../domaines/type-exercice';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PopupExercice} from '../popup-new-exercice/popup-new-exercice.component';
import {PopupNewCategorieService} from '../../services/popup-new-categorie.service';

export class ErrorMessages  {
  name: StuctureError[];
}

export class PopupCategorie  {
  type: TypeExercice;
}

@Component({
  selector: 'app-popup-new-categorie',
  templateUrl: './popup-new-type-exercice.component.html',
  styleUrls: ['./popup-new-type-exercice.component.css']
})
export class PopupNewTypeExerciceComponent implements OnInit {
  public typeExerciceForm: FormGroup;
  public errorMessages: ErrorMessages;
  public typeExercice: TypeExercice[];

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: PopupCategorie,
              public dialogPop: MatDialogRef<PopupNewTypeExerciceComponent>,
              private service: PopupNewCategorieService
  ) { }

  ngOnInit() {

    this.typeExerciceForm = this.fb.group({
      name: new FormControl( this.data.type.name, [Validators.required]),
      description: new FormControl( this.data.type.description),
    });


    this.errorMessages = {
      name: [
        {type: 'required', message: 'La nom est requis'}
      ]
    };
  }

  close() {
    this.dialogPop.close();
  }

  create() {
    if (this.typeExerciceForm.valid) {
      const t = this.typeExerciceForm.value;
      const e = new TypeExercice();
      e.id = this.data.type.id;
      e.name = t.name;
      e.description = t.description;

      this.dialogPop.close({typeExercice: e});
    }
  }

}
