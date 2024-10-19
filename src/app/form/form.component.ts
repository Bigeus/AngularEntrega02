import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';

  mostrarToast: boolean = false;
  mostrarWin: boolean = false;
  formularioEnviado: boolean = false; 

  onSubmit(form: any) {
    this.formularioEnviado = true; 

    if (form.valid) {
      console.log('Formulário enviado com sucesso:', this.ra, this.nome, this.email, this.celular);
      this.mostrarWin = true;
      /* form.resetForm(); */
      /* this.formularioEnviado = false;
      this.mostrarWin = false; */
    } else {
      this.mostrarToast = true;
      setTimeout(() => {
        this.mostrarToast = false;
      }, 3000);
    }
  }
}
