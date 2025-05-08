import { Component } from '@angular/core';
import { BooksService } from '../../../servisec/books.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider3',
  imports: [CommonModule],
  templateUrl: './slider3.component.html',
  styleUrl: './slider3.component.scss'
})
export class Slider3Component {
    constructor(private _BooksService:BooksService, private _router: Router){}
    categry:any[]=[]
  ngOnInit(): void {
    this._BooksService.getGategry().subscribe({
      next:(res)=>{
  console.log(res);
  // this.categry=res[0].books
  this.categry = res
    .flatMap((item: any) => item.books)  // يفرد كل الكتب من كل العناصر
    .slice(0, 4);
      }
    })
  }
  addToBasket(bookID: string) {
    this._BooksService.AddToCart(bookID , 1).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
   }
 
}
