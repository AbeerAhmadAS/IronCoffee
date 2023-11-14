import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from 'src/app/model/model';
import { CoffeeService } from 'src/app/service/coffee.service';

@Component({
  selector: 'app-coffeitem',
  templateUrl: './coffeitem.component.html',
  styleUrls: ['./coffeitem.component.css']
})
export class CoffeitemComponent implements OnInit {
[x: string]: any;
  coffeeId!: number;
  coffeeList: Coffee | undefined;
image_url: any;

  constructor(private route: ActivatedRoute, private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeId = this.route.snapshot.params['id'];
  
    this.coffeeService.getCoffeeItem(this.coffeeId).subscribe(
      (data: Coffee) => {
        this.coffeeList = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
