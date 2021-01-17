import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  lost: string = '404!'
  title: string = 'UH OH! Seems You are lost'
  description: string = 'The page you are looking for does not exist. How you got here is a real mistery. But do not worry, just click the button below to go back!'
  ngOnInit(): void {
  }

}
