import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-detalhe',
  imports: [],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})

export class DetalheComponent {
  public obj: Produto = new Produto();
  public mensagem: String = "";
  public constructor() {
    let json = localStorage.getItem("produto");
    if(json == null){
      this.mensagem = "Ocorreu um erro de navegação, verifique!";
    } else {
      this.obj = JSON.parse(json);
    }
    
  }
}