import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { ListComponent } from './components/list/list.component';
import { Coffee } from './model/model';
import { CoffeitemComponent } from './components/coffeitem/coffeitem.component';
import { HomeComponent } from './components/home/home.component';
// import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  // {
  //   path: "HomePage",
  //   component: HomeComponent
  // },

  {
    path: "CoffeList",
    component: ListComponent
  },
  { path: 'CoffeList/SingleCoffee/:id',
   component: CoffeitemComponent }

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
