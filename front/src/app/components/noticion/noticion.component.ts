import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticion',
  templateUrl: './noticion.component.html',
  styleUrls: ['./noticion.component.scss']
})

export class NoticionComponent implements OnInit {

  constructor(
    private noticia: NoticiasService
  ) {}

  data: any;

  mostrarInfoNoticias() {
    this.noticia.getNoticiasService().subscribe(respuesta => {
      console.log(respuesta);
      this.data = respuesta;
    })
    
  }

  ngOnInit(): void {
    this.mostrarInfoNoticias();

  }

}
