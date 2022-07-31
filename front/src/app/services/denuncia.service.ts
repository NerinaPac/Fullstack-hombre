import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
 // Definimos de manera predeterminada que el GatitosService siempre va a utilizar HttpClient
    constructor(
      private http: HttpClient
    ) { }

    insertDenuncia () {
        return this.http.get('/api/agregar-exposicion');
    }

}
