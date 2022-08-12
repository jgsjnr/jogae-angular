import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common'

import { JogadorService } from '../service/jogador.service';

@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css']
})
export class JogadorFormComponent implements OnInit {
  form: FormGroup
  constructor(private formBuilder: FormBuilder,
    private jogadorService: JogadorService,
    private location: Location,
    private snackBar: MatSnackBar
    ) { 
    this.form = this.formBuilder.group({
      nmNick:[null],
      vlJogador:[null],
      rankJogador:[null]
    });
  }

  onSubmit(){
    this.jogadorService.save(this.form.value).subscribe(result => this.onSucess(), error => this.snackBar.open('Erro ao salvar', 'Ok', {duration: 5000}))
  }
  onCancel(){
    this.location.back()
  }
  onUpdate(){
    this.jogadorService.update(this.form.value).subscribe(result => this.onSucess(), error => this.snackBar.open('Erro ao salvar', 'Ok', {duration: 5000}))
    this.snackBar.open('Atualizado com sucesso', 'ok', {duration: 5000})
    this.location.back()
  }
  onSucess(){
    this.snackBar.open('Salvo com sucesso', 'ok', {duration: 5000})
    this.location.back()
  }
  ngOnInit(): void {
  }

}
