

import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../../servisec/books.service';
import { MatInputModule } from '@angular/material/input';
import {
  injectStripe,
  StripeElementsDirective,
  StripeCardComponent,
  NgxStripeModule
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripeCardElementOptions
} from '@stripe/stripe-js';
import { ReactiveFormsModule, FormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
 import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-visi',
  imports: [MatInputModule,NgxStripeModule,ReactiveFormsModule,
    FormsModule,],
  templateUrl: './visi.component.html',
  styleUrl: './visi.component.scss'
})
export class VisiComponent implements OnInit {
  constructor(private _BooksService: BooksService,private _ToastrService:ToastrService){}
  cartId:string=''; //الي هنمسك بي id بتاع الباسكت
  paymentToken:string="";
  stripePublicKey ='pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8';
  
  
  ngOnInit(): void {
    this._BooksService.getBaskt().subscribe({
      next: (res:any) => {
        console.log(res);

          this.cartId=res._id;
         console.log(res._id);
        
      }
    });
   }

   @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;

   private readonly fb = inject(UntypedFormBuilder);

   cardOptions: StripeCardElementOptions = {
     style: {
       base: {
         iconColor: '#666EE8',
        color: '#31325F',
         fontWeight: '300',
         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
         fontSize: '18px',
         '::placeholder': {
           color: '#CFD7E0'
         }
       }
     }
   };

   elementsOptions: StripeElementsOptions = {
     locale: 'en'
   };

   checkoutForm = this.fb.group({
     name: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.email]]});

  // // Replace with your own public key
   stripe = injectStripe(this.stripePublicKey);

   createToken() {
     const name = 'mohsen'
    this.stripe
      .createToken(this.cardElement.element, { name })
      .subscribe((result) => {
        if (result.token) {
          
          // Use the token
           console.log(result.token.id);
           this.paymentToken=result.token.id;
           this.oncreatingOrder(this.cartId,this.paymentToken)
           this._ToastrService.success('Payment completed successfully','Success')
       } else if (result.error) {
           // Error creating the token
           console.log(result.error.message);
         }
       },);
   }
   oncreatingOrder(cartId: string, paymentToken: string): void {
    const payload = {
      token: paymentToken,
      // delivery_address: {
      //   country: 'Egypt',
      //   city: 'Giza',
      //   state: 'Giza',
      //   building: 25,
      //   street: 'ayhage',
      //   floor: 1,
      //   apartment: 1,
      //   mobile: '01004444444',
      //   additional_info: 'ayhage',
      //   location: {
      //     type: 'point',
      //     coordinates: [30.0444, 31.2357]
      //   },
      // }
    };
  
     this._BooksService.onCreatingOrder(cartId, payload).subscribe(
  {next:(res:any)=>{

 console.log(res);

    }})
  }
}

//    oncreatingOrder( cartId:string,paymentToken:string):void{
//      const payload={
//        token:paymentToken,
//       // delivery_address:{
//       //    country:'Egypt',
//       //    city:'Giza',
//       //    state:'Giza',
//       //   building:25,
//       //   street:'ayhage',
//       //   foor:1,
//       //   appartment:1,
//       //    mobile:'01004444444',
//       //    additional_info:'ayhage',
//       //    location:{
//       //      type:'point',
//       //     coordinates:[30.0444,31.2357]
//       //   },
//       // }
//      }
//  this._BooksService.onCreatingOrder(cartId,payload).subscribe(
//   (res)=>{
//      debugger
//    }
//  )
//    }

