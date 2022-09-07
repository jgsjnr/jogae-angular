import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs';

import { Jogador } from '../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private readonly API: string = 'http://152.67.44.32:8080/jogae/jogador/'
  constructor(private httpClient: HttpClient) { 
  }
  findAll(){
    return this.httpClient.get<Jogador[]>(this.API).pipe(tap(jogador => console.log(jogador), delay(5000)))
  }
  save(jogador: Jogador){
    return this.httpClient.post<Jogador>(this.API, jogador)
  }
  delete(jogador: String){
    return this.httpClient.delete(this.API+jogador)
  }
  update(jogador: Jogador){
    return this.httpClient.put(this.API, jogador)
  }
}
