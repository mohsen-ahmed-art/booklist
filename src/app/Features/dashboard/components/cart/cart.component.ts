
import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from '../../servisec/books.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.acthions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  totalCost: number = 0;
basket: any[] = [];
count$:Observable<number>;
cartId:string='';
constructor(private _BooksService: BooksService,private store:Store<{count:number}>,private _Router:Router) {

  this.count$=store.select('count')

}

ngOnInit(): void {
  this._BooksService.getBaskt().subscribe({
    next: (res) => {
      console.log(res);
      debugger
      this.basket = res.items || []; 
      this.totalCost = res.total || 0;
      // this.cartId=res._id;
      // console.log(res._id);
      
    }
  });
}

removeItem(itemId: string) {
  this._BooksService.delet(itemId).subscribe({
    next: (response) => {
      console.log('تم حذف العنصر بنجاح:', response);
     
      
      this.basket = this.basket.filter(item => item._id !== itemId);
    
    },
    error: (error) => {
      console.error('حدث خطأ أثناء حذف العنصر:', error);
    }
  });
}


incrementQuantity(item: any) {
  
  item.quantity += 1;
  
}
decrementQuantity(item: any) {
 
  if (item.quantity > 1) {
    item.quantity -= 1;
   
  }
}
inc(){
  this.store.dispatch(increment())
}
dec(){  this.store.dispatch(decrement())}
res(){  this.store.dispatch(reset())}




goToRegister() {
  this._Router.navigate(['/dashboard/visi']);
}

}

