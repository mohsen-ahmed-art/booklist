import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  [x: string]: any;

  constructor(private _HttpClient: HttpClient) { }
 
    login(data: any): Observable<any> {
     
      return this._HttpClient.post('/api/auth/login', data );
    }
  
    
    register(data: any): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json', 
      });
  
      return this._HttpClient.post('/api/auth/register', data, );
    }
    forget(data:FormGroup):Observable<any>{

      return this._HttpClient.post('/api/auth/forgot-password',data)
    } 




change(data: any): Observable<any> {
  const token = localStorage.getItem('token');

  if (!token) {
    console.error(' مفيش توكن! سجل دخول أول.');
    return throwError(() => new Error('User not authenticated'));
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this._HttpClient.post('/api/auth/change-password', data, { headers });
}


rest(data: any): Observable<any> {
  const token = localStorage.getItem('token');
  console.log(' Token sent to server:', token);

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  return this._HttpClient.post(
    '/api/auth/reset-password',
    data,
    { headers }
  );
}
  }

  

