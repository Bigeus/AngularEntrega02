import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  ac1 = 0;
  ac2 = 0;
  ag = 0;
  af = 0;
  resultado = '';
  media = 0;

  calcularMedia() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = this.media >= 5 ? 'Aprovado 🎉' : 'Reprovado 💢❌';
  }
}
