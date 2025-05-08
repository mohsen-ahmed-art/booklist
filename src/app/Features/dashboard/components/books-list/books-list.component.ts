import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servisec/books.service';
import { CommonModule } from '@angular/common';
 import { ToastrService } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books-list',
  imports: [CommonModule ,MatPaginatorModule],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit {
  constructor(private _BooksService:BooksService ,private _ToastrService:ToastrService ,private _Router:Router){}
   caterry:any[]=[]
books:any
ngOnInit() {
  this._BooksService.getBooks().subscribe((res) => {
    console.log('Full response:', res);
this.books=res
    
 
  });
}
  addToBasket(bookID: string) {
    this._BooksService.AddToCart(bookID , 1).subscribe({
      next: (res) => {
        console.log(res);
      },error:()=>{},
      complete:()=>{
        this._ToastrService.success('The item has been added successfully.','Success')
      }
    });
   }
  //  goToRegister() {
  //   this._Router.navigate(['/dashboard/cart']);
  // }

}
 