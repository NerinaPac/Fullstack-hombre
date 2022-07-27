import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor(
    private noticia: NoticiasService
  ) { }

/* noticias = [
    {
      imagen: "assets/noticias/lucio-dupuy.webp",
      titulo: "Lucio: Un padre que lucho por su tenencia, y un descarrador final.",
      contenido: "Lorem ipsum sarasa blah Lorem ipsum sarasa blah Lorem ipsum sarasa blah",
    },
    {
      imagen: "assets/noticias/jonny.webp",
      titulo: "Jhonny Depp: Victima de violencia de genero femenino.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
    },
    {
      imagen: "assets/noticias/padre-ucrania-nene.webp",
      titulo: "Ucrania: Los hombres estan obligados a ir a la guerra.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
      
    },
  ]; */
  data:any;

  mostrarInfoNoticias() {
    this.noticia.getNoticiasService().subscribe(respuesta => {
     this.data = Object.values(respuesta);
     console.log(this.data);
     
    });
        
  }
  
  
  

  ngOnInit(): void {
    this.mostrarInfoNoticias();

  }

}