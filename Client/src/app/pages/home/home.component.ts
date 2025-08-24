import { Component, OnInit } from '@angular/core';
import { ComandaCardComponent, ComandaData } from "../../components/card-comanda/card-comanda.component";
import { CommonModule } from '@angular/common';
import { FormConfig } from '../../components/form-padrao/form-config.interface';
import { ModalService } from '../../utils/modal-service.service';
import { Comanda } from './comanda-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ComandaCardComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  comandasAbertas: ComandaData[] = [];
  comandasFechadas: ComandaData[] = [];

  private todasComandas: ComandaData[] = [
    { id: 1, titulo: 'Mesa 01', valorTotal: 150.75, quantidadeTrocas: 3, status: 'aberta' },
    { id: 2, titulo: 'Mesa 02', valorTotal: 80.00, quantidadeTrocas: 1, status: 'fechada' },
    { id: 3, titulo: 'Balcão', valorTotal: 220.50, quantidadeTrocas: 5, status: 'aberta' },
    { id: 4, titulo: 'Delivery #123', valorTotal: 55.20, quantidadeTrocas: 0, status: 'fechada' },
    { id: 5, titulo: 'Mesa 05', valorTotal: 310.00, quantidadeTrocas: 8, status: 'aberta' },
    { id: 6, titulo: 'Comanda Antiga #987', valorTotal: 112.30, quantidadeTrocas: 2, status: 'fechada' },
    { id: 7, titulo: 'Comanda Antiga #987', valorTotal: 112.30, quantidadeTrocas: 2, status: 'fechada' },
    { id: 8, titulo: 'Mesa 01', valorTotal: 150.75, quantidadeTrocas: 3, status: 'aberta' },
    { id: 9, titulo: 'Mesa 02', valorTotal: 80.00, quantidadeTrocas: 1, status: 'fechada' },
    { id: 10, titulo: 'Balcão', valorTotal: 220.50, quantidadeTrocas: 5, status: 'aberta' },
    { id: 11, titulo: 'Delivery #123', valorTotal: 55.20, quantidadeTrocas: 0, status: 'fechada' },
    { id: 13, titulo: 'Comanda Antiga #987', valorTotal: 112.30, quantidadeTrocas: 2, status: 'fechada' },
    { id: 14, titulo: 'Comanda Antiga #987', valorTotal: 112.30, quantidadeTrocas: 2, status: 'fechada' },
  ];

  constructor (
    private modalService: ModalService
  ){ }

  ngOnInit(): void {
    this.comandasAbertas = this.todasComandas.filter(c => c.status === 'aberta');
    this.comandasFechadas = this.todasComandas.filter(c => c.status === 'fechada');
  }

  novaComanda(){
    const formConfig: FormConfig<Comanda> = {
      title: 'Criar Nova Comanda',
      saveUrl: '/api/comandas',
      model: { id: 0, abertura: new Date() },
      fields: [
        { key: 'abertura', label: 'Abertura', type: 'date', required: true }
      ]
    };

    const dialogRef = this.modalService.openFormDialog(formConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Modal fechado com sucesso. Resultado:', result);
        this.comandasAbertas.unshift(result);
      } else {
        console.log('Modal fechado sem salvar.');
      }
    });
  }
}