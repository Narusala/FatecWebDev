import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public mensagem: String = "";
  public produtos: Produto[] = [{"codigo": 1, "nome": "Furadeira", 
  "valor": 100, "quantidade": 100, "descritivo":"furadeira eletrica bivolt"},
  {"codigo": 2, "nome": "Serra Marmore", 
  "valor": 110, "quantidade": 15, "descritivo":"Serra Marmore eletrica"},
  {"codigo": 3, "nome": "Parafusadeira", 
  "valor": 180, "quantidade": 0, "descritivo":"furadeira eletrica bivolt"}]

  public detalhes(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href="./detalhe";
  }
}
