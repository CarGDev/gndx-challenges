import { Component, OnInit } from '@angular/core';
import { Title } from './title/title.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  titles: Title[] = [
    {
      _id: '1231',
      title: 'HOME'
    },
    {
      _id: '1232',
      title: 'BLOG'
    },
    {
      _id: '1233',
      title: 'PORTFOLIO'
    },
    {
      _id: '1234',
      title: 'CONTACT'
    },
    {
      _id: '1235',
      title: 'TALKS'
    },
  ]

  socialMedia: string[] =[
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
