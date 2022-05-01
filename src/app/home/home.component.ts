import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';
import { of } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked = false;
  title = `Running on Angular ${VERSION.full}!`;

  cars = of([
    {
      manufacturer: 'Honda',
      model: 'Civic',
      year: 2009,
      img: 'assets/civic-2009.jpg',
      available: true
    },
    {
      manufacturer: 'Peugeot',
      model: '206',
      year: 2004,
      img: 'assets/206-2004.jpg',
      available: false
    },
    {
      manufacturer: 'Volkswagen',
      model: 'Golf',
      year: 2022,
      img: 'assets/golf-2022.jpg',
      available: false
    }
  ])

  handleClick() {
    this.clicked = true;
  }

  constructor() { };

  ngOnInit(): void {
  };

} 
