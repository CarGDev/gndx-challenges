import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrelloComponent } from './components/trello/trello.component'

const routes: Routes = [
  {
    path: '',
    component: TrelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrelloRoutingModule { }
