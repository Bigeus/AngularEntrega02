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

  mostrarToast: boolean = false; // Controle para exibir o toast
  mostrarWin: boolean = false;
  formularioEnviado: boolean = false; // Verifica se o formulário foi enviado

  onSubmit(form: any) {
    this.formularioEnviado = true; // Marca que o formulário foi enviado

    if (form.valid) {
      console.log('Formulário enviado com sucesso:', this.ra, this.nome, this.email, this.celular);
      this.mostrarWin = true;
      // Resetar o formulário e os indicadores após o envio bem-sucedido
      form.resetForm();
      this.formularioEnviado = false;
      this.mostrarWin = false;
    } else {
      this.mostrarToast = true; // Exibe o toast se o formulário for inválido
      setTimeout(() => {
        this.mostrarToast = false; // Esconde o toast após 3 segundos
      }, 3000);
    }
  }
}
