// import { HttpInterceptorFn } from '@angular/common/http';

// export const globalInterceptor: HttpInterceptorFn = (req, next) => {
//   const baseUrl: string = 'https://upskilling-egypt.com:3007';

//   const modifiedRequest = req.clone({ url: baseUrl +req.url});

//   return next(modifiedRequest);
// };
import { HttpInterceptorFn } from '@angular/common/http';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl: string = 'https://upskilling-egypt.com:3007';
  const token = localStorage.getItem('token');

  // لو الـ URL ما بيبدأش بـ http، ضيف عليه الـ baseUrl
  const isFullUrl = req.url.startsWith('http');
  const fullUrl = isFullUrl ? req.url : baseUrl + req.url;

  // ضيف التوكن لو موجود
  const modifiedRequest = req.clone({
    url: fullUrl,
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
  });

  return next(modifiedRequest);
};
