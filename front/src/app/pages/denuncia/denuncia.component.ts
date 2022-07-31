import { Component, OnInit } from '@angular/core';
import { DenunciaService } from 'src/app/services/denuncia.service';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.scss']
})
export class DenunciaComponent implements OnInit {

  constructor(
    private denunciaService: DenunciaService
  ) { }

  expoDenuncia:any;

  insertDenuncia() {
    this.denunciaService.insertDenuncia().subscribe(respuesta => {
     this.expoDenuncia = respuesta;     
     
    });
        
  }

  ngOnInit(): void {
    this.insertDenuncia();

  }


}
