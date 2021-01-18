import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  lost: string = '404!'
  title: string = 'UH OH! Seems You are lost'
  description: string = 'The page you are looking for does not exist. How you got here is a real mistery. But do not worry, just click the button below to go back!'

  ngOnInit(): void {
  }

}
