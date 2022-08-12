import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsRoutingModule } from './forms-routing.module';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogadorComponent } from './jogador/jogador.component';



@NgModule({
  declarations: [
    JogadorComponent,
    JogadorFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
