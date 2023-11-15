import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/model/model';
import { CoffeeService } from 'src/app/service/coffee.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coffee: Coffee[] = [];
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  
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

      this.searchSubject.pipe(
      switchMap((query: string) => this.coffeeService.searchCoffees(query))
    ).subscribe((result: Coffee[]) => {
      this.coffee = result;
    });
  }

  goToCoffee(id: number) {
    this.router.navigate(['/coffee', id]);
  }

  
  onSearch(): void {
    this.searchSubject.next(this.searchQuery);
  }
}
