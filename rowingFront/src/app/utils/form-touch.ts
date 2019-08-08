export class FormTouch {
  static  markAsTouched(form) {
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsTouched({onlySelf: true});
      form.get(key).updateValueAndValidity();
    });
  }

}
