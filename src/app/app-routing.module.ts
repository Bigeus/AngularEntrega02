import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NotasComponent } from './notas/notas.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormComponent } from './form/form.component';
import { SegurosComponent } from './seguros/seguros.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'form', component: FormComponent },
  { path: 'seguros', component: SegurosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
