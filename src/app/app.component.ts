import { Component } from '@angular/core';
// import data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  'news': {
    'id': 12345,
    'author': 'John Doe',
    'tags': 'webdesign,  mobile, software development',
    'imageurl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rjhHwUcSX19nHJ4g0TLGVZOBVsdl694baHym8_yybDKiacjR2w (10 kB)',
    'content': 'Software Mobile',
    'category': 'mobile development'
  }
 
  now = new Date()
  year = this.now.getFullYear()
  month = this.now.getMonth() + 1
  day = this.now.getDate()
  date = this.day + '/' + this.month + '/' + this.year
}
