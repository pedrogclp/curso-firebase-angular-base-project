import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {AuthService} from "../../object/user/auth.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(@Optional() @Inject('serverUrl') protected serverUrl: string,private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const serverReq = !this.serverUrl ? req : req.clone({
      url: `${this.serverUrl}${req.url}`
    });
    // Get the auth header from the service.
    const authHeader = ""+this.authService.userInfo.value.uid;//this.auth.getAuthorizationHeader();
    // Clone the request to add the new header.
    const authReq = serverReq.clone({headers: req.headers.set('Authorization', authHeader)});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);

  }

}