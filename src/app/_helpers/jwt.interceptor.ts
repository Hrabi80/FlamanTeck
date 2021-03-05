import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../_services/auth.service';
import { environment } from 'src/environments/environment';


@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    private _URLPattern = environment.api_url + '/api';
    constructor(private auth: AuthService
        ) { 
         
        }

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          console.log('intercepted', req);
           if(req.url.startsWith(this._URLPattern)){
            let token:any = JSON.parse(localStorage.getItem('currentUser')!).token;
            setTimeout(() => {
              console.log("hi i want to see this token === ",token);
             // console.log('here again ',localStorage.getItem('currentUser'));
            }, 3500);
           // let token:any = JSON.parse(localStorage.getItem('access_token')).token;
            //  let token:any = JSON.stringify(localStorage.getItem('access_token')).token;
            //const user = JSON.parse(localStorage.getItem('access_token'));
           //let token:any = user.token;
           req = req.clone({
             setHeaders: {
               Authorization: `Bearer ${token}`
             }
           });
         }
           return next.handle(req);
       }
   }