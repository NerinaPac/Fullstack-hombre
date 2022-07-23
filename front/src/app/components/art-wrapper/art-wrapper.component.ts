import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-wrapper',
  templateUrl: './art-wrapper.component.html',
  styleUrls: ['./art-wrapper.component.scss']
})
export class ArtWrapperComponent implements OnInit {

  constructor() { }

  articulos = [
    {
      imagen: "assets/noticias/aborto-masculino.jpg",
      titulo: "Lucio: Un padre que lucho por su tenencia, y un descarrador final.",
      contenido: "Lorem ipsum sarasa blah Lorem ipsum sarasa blah Lorem ipsum sarasa blah",
    },
    {
      imagen: "assets/noticias/hombre-cayendo.jpg",
      titulo: "Jhonny Depp: Victima de violencia de genero femenino.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
    },
    {
      imagen: "assets/noticias/nueva-izquierda.jpg",
      titulo: "Ucrania: Los hombres estan obligados a ir a la guerra.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
      
    },
  ];

  ngOnInit(): void {
  }

}
