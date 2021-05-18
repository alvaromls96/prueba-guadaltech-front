import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Intercepts http requests to add the server api url to each request.
 *
 * @export
 * @class CustomHttpInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // clone the request changing the server api url, declared in the environment.
    const clonedRequest = req.clone({ url: `${environment.url}/${req.url}` })
    return next.handle(clonedRequest);
  }
}