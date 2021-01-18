import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrelloRoutingModule } from './trello-routing.module';
import { TrelloComponent } from './components/trello/trello.component';


@NgModule({
  declarations: [TrelloComponent],
  imports: [
    CommonModule,
    TrelloRoutingModule
  ]
})
export class TrelloModule { }
