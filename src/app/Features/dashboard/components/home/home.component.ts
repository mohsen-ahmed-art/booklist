import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  imports: [MatIconModule,MatDividerModule,MatButtonModule,FontAwesomeModule,MatToolbarModule,],
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss'] 
})
export class HomeComponent {

}
