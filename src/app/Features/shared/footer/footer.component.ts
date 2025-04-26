import { Component } from '@angular/core';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-footer',
  imports: [    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FontAwesomeModule,MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
}
