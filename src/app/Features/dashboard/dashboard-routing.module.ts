import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { CartComponent } from './components/cart/cart.component';
import { VisiComponent } from './components/visi/visi.component';

const routes: Routes = [
{path:"",redirectTo:'home',pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"books",component:BooksListComponent},
{path:"cart",component:CartComponent},
{path:"visi",component:VisiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
