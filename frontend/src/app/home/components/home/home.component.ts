import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  nombre: string = 'Carlos Gutiérrez 🤖🤖🤖'
  description: string = "Backend developer with a degree as a Mechatronic engineer. very passionate about continuous learning and focus to improve my knowledge of technology is known and new technologies. I would like to go straight to a position as a backend developer and contribute to the open-source community. believed that this will best further my skills."
  title2: string = 'Technologies known'

  images: string[] =[
    'http://dummyimage.com/202x146.png/ff4444/ffffff',
    'http://dummyimage.com/202x146.png/ff4444/ffffff',
    'http://dummyimage.com/202x146.png/ff4444/ffffff',
    'http://dummyimage.com/202x146.png/ff4444/ffffff',
    'http://dummyimage.com/202x146.png/ff4444/ffffff',
    'http://dummyimage.com/202x146.png/ff4444/ffffff',
    'http://dummyimage.com/202x146.png/ff4444/ffffff',
    'http://dummyimage.com/202x146.png/ff4444/ffffff'
  ]


  ngOnInit(): void {
  }

}
