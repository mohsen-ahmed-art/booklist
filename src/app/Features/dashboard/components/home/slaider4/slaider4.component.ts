import { Component } from '@angular/core';
import { BooksService } from '../../../servisec/books.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-slaider4',
  imports: [CommonModule],
  templateUrl: './slaider4.component.html',
  styleUrl: './slaider4.component.scss'
})
export class Slaider4Component {
  constructor(private _BooksService:BooksService,){}
  categry:any[]=[]
  ngOnInit(): void {
    this._BooksService.getGategry().subscribe({
      next:(res)=>{
  console.log(res);
  // this.categry=res[0].books
  this.categry = res
    .flatMap((item: any) => item.books)  // يفرد كل الكتب من كل العناصر
    .slice(0, 1);
      }
    })
  }
}
