import { CertificadoInterface } from './../interfaces/certificado-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {

  certificados: CertificadoInterface[] = [];

  constructor(){}

  adicionarCertificado(certificado: CertificadoInterface){
    this.certificados.unshift({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
