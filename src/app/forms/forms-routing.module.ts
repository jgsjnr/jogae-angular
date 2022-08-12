import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogadorComponent } from './jogador/jogador.component';

const routes: Routes = [
  {path:'', component: JogadorComponent}, 
  {path:'new', component: JogadorFormComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
