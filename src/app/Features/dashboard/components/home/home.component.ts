import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BooksService } from '../../servisec/books.service';
import { CommonModule } from '@angular/common';
import { Slider3Component } from './slider3/slider3.component';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Slaider4Component } from "./slaider4/slaider4.component";
@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FontAwesomeModule,
    MatToolbarModule,
    CommonModule,
    Slider3Component,
    // RouterOutlet,
    Slaider4Component
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _BooksService: BooksService, private _router: Router) {}
  categry: any[] = [];
  ngOnInit(): void {
    this._BooksService.getGategry().subscribe({
      next: (res) => {
        console.log(res);
        // this.categry=res[0].books
        this.categry = res
          .flatMap((item: any) => item.books) // يفرد كل الكتب من كل العناصر
          .slice(0, 3);
      },
    });
  }
  goToRegister() {
    this._router.navigate(['/dashboard/books']);
  }
}
