import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse,HttpResponse,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestLoaderInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        // private loaderService: LoaderService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // this.showLoader();
        let token = localStorage.getItem('fat');
        // req.headers.set('auth-token', token)
        // console.log(req);
        if (req.url.match("/assets/i18n/en.json")|| req.url.match("/assets/i18n/nl.json")  ) {
            req = req.clone({
                url: environment.liveUrl + req.url
            })
            // console.log("Modify Request",req)
        }
       else if (req.url.match("/translate")) {
            req = req.clone({
                url: environment.translateUrl + environment.translateApiKey
            })
            // console.log("Modify Request",req)
        }
        else if (req.params.get('isDifferent')) {
            // req.params.delete('isDifferent');
            // console.log('url',req.url)
            req = req.clone({
                url: `${req.url}`,
            });
        } else if (token) {
            req = req.clone({
                url: environment.baseUrl + req.url,
                setHeaders: {
                    'auth-token': token
                }
            });
        } else if (!token) {
            req = req.clone({
                url: environment.baseUrl + req.url
            });
        }


        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // this.onEnd();
            }
        },
            (err: any) => {
                // this.onEnd();
            }));
    }
}
