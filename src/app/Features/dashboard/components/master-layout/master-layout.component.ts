import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-master-layout',
  imports: [HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.scss'
})
export class MasterLayoutComponent {

}
