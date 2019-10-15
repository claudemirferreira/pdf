import { ParamRelatorioDto } from './../../../model/param-relatorio-dto';
import { DialogService } from './../../../dialog.service';
import { RelatorioService } from './../../../services/relatorio.service';
import { SharedService } from './../../../services/shared.service';
import { ResponseApi } from './../../../model/response-api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZonaDto } from '../../../model/zona-dto';

@Component({
  selector: 'app-debito-financeiro',
  templateUrl: './debito-financeiro.component.html',
  styleUrls: ['./debito-financeiro.component.css']
})
export class DebitoFinanceiroComponent implements OnInit {
  
  message : {};
  shared : SharedService;
  dto: ParamRelatorioDto;

  zonas: [];

  zona: ZonaDto;
  
  nucleos: [];
  classCss : {};

  constructor(
    private dialogService: DialogService,
    private relatorioService: RelatorioService,
    private router: Router) { 
      this.shared = SharedService.getInstance();
      this.carregarDados();
  }

  ngOnInit() {
    
  }

  onChangeNucleo(idZona) {
    console.log(idZona);
    this.relatorioService.carregarNucleo(idZona).subscribe((responseApi: ResponseApi) => {
      this.nucleos = responseApi.data;
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  carregarDados(){
    this.relatorioService.carregarDados().subscribe((responseApi:ResponseApi) => {
        
        this.dto = responseApi['data'];
        this.zonas = this.dto.zonas;
        this.nucleos = this.dto.nucleos;
        console.log(this.dto);
        console.log(this.dto.zonas);
        console.log(this.dto.nucleos);
    } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }  

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-'+type] =  true;
  }

}
