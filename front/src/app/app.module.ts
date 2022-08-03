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
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarrucelComponent } from './components/carrucel/carrucel.component';
import { PorqueLuchamosComponent } from './pages/porque-luchamos/porque-luchamos.component';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { ArtWrapperComponent } from './components/art-wrapper/art-wrapper.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticionComponent } from './components/noticion/noticion.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { CartelComponent } from './components/cartel/cartel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CardWrapperComponent,
    ContactoComponent,
    HomeComponent,
    NotFoundComponent,
    CarrucelComponent,
    PorqueLuchamosComponent,
    DenunciaComponent,
    ArtWrapperComponent,
    NewslettersComponent,
    FooterComponent,
    FormularioComponent,
    NoticiasComponent,
    NoticionComponent,
    NoticiaComponent,
    CartelComponent
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
