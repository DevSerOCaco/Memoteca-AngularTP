import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'I love angular.',
      autoria: 'nay',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love angular.',
      autoria: 'nay',
      modelo: 'modelo3'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
