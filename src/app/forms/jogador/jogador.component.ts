import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

import { Jogador } from '../model/jogador';
import { JogadorService } from '../service/jogador.service';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {
  //jogador: Jogador[] = []

  jogador$: Observable<Jogador[]>

  displayedColumns: string[] = ['nmNick',
   'vlJogador',
    'rankJogador',
    'actions'
  ]

  constructor(private jogadorService: JogadorService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) { 
    this.jogador$ = this.callJogador()
  }
  callJogador(){
    return this.jogadorService.findAll().pipe(catchError(error => {
      this.onError('Erro ao carregar jogadores')
      console.log("Not Found!")
      return of([])
    }))
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onDelete(jogador: String){
    this.jogadorService.delete(jogador).subscribe()
    this.jogador$ = this.callJogador()
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onEdit(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ngOnInit(): void {
  }

}
