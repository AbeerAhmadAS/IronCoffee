// coffee.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coffee } from '../model/model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private readonly API_URL = 'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';  

  constructor(private http: HttpClient) {}

  getAllCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.API_URL);
  }
  
  getCoffeeItem(id: number): Observable<Coffee> {
    return this.http.get<Coffee>(`${this.API_URL}/${id}`);
  }
  
  postCoffee(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/new`, body);
  }
}
