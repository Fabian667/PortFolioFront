import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComEncabezadoComponent } from './Componentes/com-encabezado/com-encabezado.component';
import { ComAcercaDeComponent } from './Componentes/com-acerca-de/com-acerca-de.component';
import { ComExperienciaComponent } from './Componentes/com-experiencia/com-experiencia.component';
import { ComEducacionComponent } from './Componentes/com-educacion/com-educacion.component';
import { ComProyectosComponent } from './Componentes/com-proyectos/com-proyectos.component';
import { ComLoginComponent } from './Componentes/com-login/com-login.component';
import { IniciarSesionComponent } from './Componentes/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComEncabezadoComponent,
    ComAcercaDeComponent,
    ComExperienciaComponent, 
    ComEducacionComponent,  
    ComProyectosComponent,
    ComLoginComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
