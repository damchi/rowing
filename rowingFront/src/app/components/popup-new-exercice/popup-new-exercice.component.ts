import {Component, Inject, OnInit} from '@angular/core';
import {MarkAsTouch} from '../../../utils/mark-as-touch';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PopupNewTrainingService} from '../../services/popup-new-training.service';
import {StuctureError} from '../../../utils/stucture-error';
import {Exercice} from '../../domaines/exercice';
import {TypeExercice} from '../../domaines/type-exercice';
import {TypeExerciceService} from '../../services/type-exercice.service';


export class ErrorMessages  {
  name: StuctureError[];
  typeExercice: StuctureError[];
  description: StuctureError[];
}

export class PopupExercice  {
  exercice: Exercice;
}


@Component({
  selector: 'app-pop-new-exercice',
  templateUrl: './popup-new-exercice.component.html',
  styleUrls: ['./popup-new-exercice.component.css']
})
export class PopupNewExerciceComponent extends MarkAsTouch implements OnInit {

  public exerciceForm: FormGroup;
  public errorMessages: ErrorMessages;
  public typeExercice: TypeExercice[];


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: PopupExercice,
              public dialogPop: MatDialogRef<PopupNewExerciceComponent>,
              private service: PopupNewTrainingService,
              private serviceTypeExercice: TypeExerciceService) {
    super();


  }

  ngOnInit() {

    this.exerciceForm = this.fb.group({
      name: new FormControl( this.data.exercice.name, [Validators.required]),
      typeExercice: new FormControl( this.data.exercice.typeExercices, [Validators.required]),
      description: new FormControl( this.data.exercice.description, [Validators.required]),
    });


    this.errorMessages = {
      name: [
        {type: 'required', message: 'La nom est requis'}
      ],
      typeExercice: [
        {type: 'required', message: 'La categorie est requise'}
      ],
      description: [
        {type: 'required', message: 'La categorie est requise'}
      ]
    };
    this.getTypeExercice();
  }

  getTypeExercice() {
    this.serviceTypeExercice.getAll().subscribe( (type: TypeExercice[]) => {
      this.typeExercice = type;
      if (this.data.exercice.typeExercices) {
        this.exerciceForm.get('typeExercice').patchValue(this.data.exercice.typeExercices.id);
      }
    });
  }

  close() {
    this.dialogPop.close();
  }

  create() {
    if (this.exerciceForm.valid) {
      const t = this.exerciceForm.value;
      const e = new Exercice();
      e.id = this.data.exercice.id;
      e.name = t.name;
      e.description = t.description;
      e.typeExercices = t.typeExercice;

      this.dialogPop.close({exercice: e});
    }
  }

}
