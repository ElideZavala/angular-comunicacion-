import { Component, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.scss']
})
export class Compo1Component implements AfterContentChecked {

  @Input() valor1: string;
  @Input() valor2: string;
  aux1: number;
  aux2: number;
  @Output()
  envRes: EventEmitter<number> = new EventEmitter<number>();
  value: number;

  ngAfterContentChecked() {
    this.aux1 = parseFloat(this.valor1);
    this.aux2 = parseFloat(this.valor2);
  }

  suma(): void {
    this.envRes.emit(this.aux1 + this.aux2);
  }

  resta(): void {
    this.envRes.emit(this.aux1 - this.aux2);
  }

  multiplica(): void {
    this.envRes.emit(this.aux1 * this.aux2);
  }

  divide(): void {
    this.envRes.emit(this.aux1 / this.aux2);
  }

  constructor() { }


}
