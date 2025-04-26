import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  

} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FontAwesomeModule
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faPhone = faPhone;
  faKey = faKey;

  constructor(private _Router:Router){}
  goToRegister() {
    this._Router.navigate(['/auth/change-password']);
  }
}
