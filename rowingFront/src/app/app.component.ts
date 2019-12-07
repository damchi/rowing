import { Component } from '@angular/core';
import {ServiceService} from './services/service.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rowingFront';
constructor(private alertService: ServiceService, private snackBar: MatSnackBar) {
  this.alertService.onGood.subscribe((message: string) => {
    this.snackBar.open(message, 'Fermer', {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  });

  this.alertService.onError.subscribe((message: string) => {
    this.snackBar.open(message, 'Fermer', {
      duration: 4000,
      panelClass: 'error',
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  });


}
}
