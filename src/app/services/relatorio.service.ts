import { HELP_DESK_API } from './helpdesk.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RelatorioService {

  constructor(private http: HttpClient) {}
      
  carregarDados(){
    return this.http.get(`${HELP_DESK_API}/api/relatorio/carregarDados`);
  }

  carregarNucleo(id:string){
    return this.http.get(`${HELP_DESK_API}/api/relatorio/carregarNucleo/${id}`);
  }

}