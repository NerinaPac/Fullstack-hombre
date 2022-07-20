import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Este módulo de HTTP Client nos permite hacer llamadas a un servidor
// Llamadas a APIs
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarrucelComponent } from './components/carrucel/carrucel.component';
import { PorqueLuchamosComponent } from './pages/porque-luchamos/porque-luchamos.component';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CardWrapperComponent,
    NosotrosComponent,
    ContactoComponent,
    HomeComponent,
    NotFoundComponent,
    CarrucelComponent,
    PorqueLuchamosComponent,
    DenunciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
