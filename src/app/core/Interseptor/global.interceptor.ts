
import { HttpInterceptorFn } from '@angular/common/http';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl: string = 'https://upskilling-egypt.com:3007';

  let token: string | null = null;


  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }

  const isFullUrl = req.url.startsWith('http');
  const fullUrl = isFullUrl ? req.url : baseUrl + req.url;

 
  const modifiedRequest = req.clone({
    url: fullUrl,
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
  });

  return next(modifiedRequest);
};