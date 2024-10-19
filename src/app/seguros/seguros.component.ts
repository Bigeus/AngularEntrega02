import { Component } from '@angular/core';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent {
  nome: string = '';
  sexo: string = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number | null = null;

  calcularApolice(): void {
    if (this.sexo === 'masculino') {
      if (this.idade && this.idade <= 25) {
        this.valorApolice = this.valorAutomovel ? this.valorAutomovel * 0.15 : 0;
      } else {
        this.valorApolice = this.valorAutomovel ? this.valorAutomovel * 0.10 : 0;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel ? this.valorAutomovel * 0.08 : 0;
    }
  }
}
