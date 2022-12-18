import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valor1: string = '10';
  valor2: string = '20';
  resultadoP: number;

  captaResultado(event) {
    this.resultadoP = event;
    console.log(event)
  }
}
