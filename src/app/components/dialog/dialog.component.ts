import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';

export interface DialogData {
  deporte: string;
  nombre: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  deporte!: string;
  nombre!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: {nombre: this.nombre, animal: this.deporte},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
    });
  }
}


  