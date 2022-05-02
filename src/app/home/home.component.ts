import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';
import { Observable, of } from 'rxjs'

type Car = {
  manufacturer: string;
  model: string;
  year: number;
  img: string;
  available: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Observable<Car[]>;
  
  title = `Running on Angular ${VERSION.full}!`;

  constructor() {
    this.cars = of<Car[]>([])
  };

  ngOnInit(): void {
    this.cars = of<Car[]>([
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
  };
} 
