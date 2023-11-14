import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/model/model';
import { CoffeeService } from 'src/app/service/coffee.service';

@Component({
  selector: 'app-random-coffee',
  templateUrl: './random-coffee.component.html',
  styleUrls: ['./random-coffee.component.css']
})
export class RandomCoffeeComponent implements OnInit {
  randomCoffee: Coffee = new Coffee('', '', '', '', '', '', '', 0, '');

  constructor(private coffeeService: CoffeeService){

  }
  ngOnInit(): void {
    this.getRandomCoffee();
  }
  getRandomCoffee(): void {
    this.coffeeService.getRandomCoffee().subscribe(
      (coffee: Coffee) => {
        this.randomCoffee = coffee;
      },
      (error) => {
        console.error('Error fetching random coffee:', error);
      }
    );
  }
}