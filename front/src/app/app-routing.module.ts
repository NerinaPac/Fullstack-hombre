import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { PorqueLuchamosComponent } from './pages/porque-luchamos/porque-luchamos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';


// La home siempre primera y el 404 siempre al final
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'noticias', component: NoticiasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path:'denuncia', component: DenunciaComponent},
  {path:'porque-luchamos', component: PorqueLuchamosComponent},
  {path: 'noticia', component: NoticiaComponent},
  {path: '**', component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
