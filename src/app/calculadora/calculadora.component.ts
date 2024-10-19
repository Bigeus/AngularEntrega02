import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: number = 1;
  resultado: number | null = null; 

  calcular() {
    switch (this.operacao) {
      case 1: // Soma
        this.resultado = this.numero1 + this.numero2;
        break;
      case 2: // Subtração
        this.resultado = this.numero1 - this.numero2;
        break;
      case 3: // Multiplicação
        this.resultado = this.numero1 * this.numero2;
        break;
      case 4: // Divisão
        this.resultado = this.numero2 !== 0 ? this.numero1 / this.numero2 : null;
        break;
      default:
        this.resultado = null;
        break;
    }
  }
}
