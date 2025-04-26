import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

// bootstrapApplication(AppComponent,{  providers: [
//   provideHttpClient(), // 💡 هذا ضروري
// ]} ,appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  ...appConfig, // ⚠️ فكّ الـ appConfig هنا
  providers: [
    ...appConfig.providers || [], // ✅ خذ اللي فيه أولاً
    provideHttpClient(), 
    provideAnimations(), // required animations providers
    provideToastr(), 
    // 💉 أضف HttpClient
  ],

}).catch(err => console.error(err));