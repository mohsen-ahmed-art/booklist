import { AuthLayoutComponent } from './Features/auth/components/auth-layout/auth-layout.component';
import { Pagelayout } from './core/Enums/pagelayout';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { PagelayoutService } from './core/services/pagelayout.service';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './Features/dashboard/components/master-layout/master-layout.component';
import { ErrorLayoutComponent } from './Features/shared/components/error-layout/error-layout.component';


@Component({
  selector: 'app-root',

  imports: [RouterOutlet,MatButtonModule,CommonModule,AuthLayoutComponent,MasterLayoutComponent,ErrorLayoutComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'online-book-store';
   readonly Pagelayout=Pagelayout;
  constructor(public _PagelayoutService:PagelayoutService){}
}
