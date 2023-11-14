import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { ListComponent } from './components/list/list.component';
import { Coffee } from './model/model';
import { CoffeitemComponent } from './components/coffeitem/coffeitem.component';
import { HomeComponent } from './components/home/home.component';
import { CreateCoffeeComponent } from './components/create-coffee/create-coffee.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { FilterComponent } from './components/filter/filter.component';
// import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
   {
    path: "",
    component: HomeComponent
  },

  {
    path: "CoffeList",
    component: ListComponent
  },
  { path: 'CoffeList/SingleCoffee/:id',
   component: CoffeitemComponent },
   {
    path: "CreateCoffee",
    component: CreateCoffeeComponent
  },
  {
    path: "RandomCoffee",
    component: RandomCoffeeComponent
  },
  {
    path: "Coffees",
    component: FilterComponent
  }

  // {
  //   path: "RandomCoffee",
  //   component: ListComponent
  // }

  // {
  //   path: "**", // 404 Page
  //   component: PageNotFoundComponent,
  // },

  // {
  //   path: "CoffeList/:id",
  //   component: CoffeitemComponent
  // }
];




@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
