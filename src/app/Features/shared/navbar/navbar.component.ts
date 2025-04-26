import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  faUser,
  faHeart,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  imports: [  MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FontAwesomeModule,
    MatToolbarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faUser = faUser;
  faHeart = faHeart;
  
  faShoppingCart = faShoppingCart;
}
