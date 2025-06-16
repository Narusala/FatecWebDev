import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }
 
  gravar(obj:Cliente): Observable<Object> {
    return this.http.post("http://localhost:8080/cliente", obj);
  }
  alterar(obj:Cliente): Observable<Object> {
    return this.http.put("http://localhost:8080/cliente", obj);
  }
  carregar(obj:Cliente): Observable<Object> {
    return this.http.get("http://localhost:8080/cliente/"+ obj.codigo);
  }
  remover(obj:Cliente): Observable<Object> {
    return this.http.delete("http://localhost:8080/cliente/"+ obj.codigo);
  }
  login(obj:Cliente): Observable<Object> {
    return this.http.post("http://localhost:8080/cliente/login", obj);
  }
}