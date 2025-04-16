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
  public produtos: Produto[] = [{"codigo": 1, "nome": "Atari", 
  "valor": 400, "quantidade": 10, "descritivo":"Console Atari"},
  {"codigo": 2, "nome": "Super Nintendo", 
  "valor": 350, "quantidade": 5, "descritivo":"Console Super Nintendo"},
  {"codigo": 3, "nome": "Master System II", 
  "valor": 1000, "quantidade": 0, "descritivo":"Master System II Completo"}]

  public detalhes(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href="./detalhe";
  }
}
