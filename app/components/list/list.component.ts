import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/model/model';
import { CoffeeService } from 'src/app/service/coffee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coffee: Coffee[] = [];

  constructor(private coffeeService: CoffeeService, private router: Router) {}

  ngOnInit(): void {
    this.coffeeService.getAllCoffee().subscribe(
      (data: Coffee[]) => {
        this.coffee = data;
        console.log(this.coffee); 
      },
      (error) => {
        console.log(error); 
      }
    );
  }

  goToCoffee(id: number) {
    this.router.navigate(['/coffee', id]);
  }
}
