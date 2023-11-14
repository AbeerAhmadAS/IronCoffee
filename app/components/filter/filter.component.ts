import { Component } from '@angular/core';
import { Coffee } from 'src/app/model/model';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoffeeService } from 'src/app/service/coffee.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  searchQuery: string = '';
  searchedCoffees: Coffee[] = [];
  private searchSubject = new Subject<string>();

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      switchMap((query: string) => this.coffeeService.searchCoffees(query))
    ).subscribe((result: Coffee[]) => {
      this.searchedCoffees = result;
    });
  }

  onSearch(): void {
    this.searchSubject.next(this.searchQuery);
  }
}
