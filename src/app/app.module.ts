import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotasComponent } from './notas/notas.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormComponent } from './form/form.component';
import { SegurosComponent } from './seguros/seguros.component';

@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    MenuComponent,
    CalculadoraComponent,
    FormComponent,
    SegurosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
