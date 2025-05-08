import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor(private _HttpClient:HttpClient ,) { }

 getGategry():Observable<any>{
  return this._HttpClient.get('/api/category')
 }
  getBaskt():Observable<any>{
  
    return this._HttpClient.get('/api/basket')
  }
   AddToCart(bookId: string, quantity: number):Observable<any>{
 
     const body = {
     book:bookId,
    quantity: quantity  ,
   };
   
    return this._HttpClient.post('/api/basket/item',body);

   }
  getBooks():Observable<any>{

   return this._HttpClient.get('/api/book' )
  }

  // Updet(bookId: string,quantity:number):Observable<any>{
  //   const body = {
  //     items: [
  //       {
  //         book: bookId,
  //         quantity: quantity
  //       }
  //     ]
  //   };
  //   return this._HttpClient.put(`/api/basket/${bookId}`,body)
  // }
  Updet(itemId: string,bookId: string, quantity: string): Observable<any> {
    const body = {
      items: [
        {
          book: bookId,
          quantity: quantity
        }
      ]
    };
    return this._HttpClient.put(`/api/basket/${itemId}`, body);
  }
  delet(itemId: string): Observable<any> {
    return this._HttpClient.delete(`/api/basket/item/${itemId}`);
  }

   onCreatingOrder(cartId:string,data:any):Observable<any>{
  
     return this._HttpClient.post(`/api/order/${cartId}`,data,)
   }

}



