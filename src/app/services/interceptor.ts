import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SessionInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private _authService: AuthService, private router: Router) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.url.includes("googleapis")) {
            request = this.addToken(request);
        }

        return next.handle(request).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    console.log("Error 401");
                    localStorage.clear();
                    this.router.navigate(['/home']);
                }
                return throwError(() => error);
            })
        );
    }

    private addToken(request: HttpRequest<any>) {
        const urlToken = `${request.url}${this._authService.token()}`;
        console.log("Interceptor", urlToken);
        return request.clone({
            url: urlToken
        });
    }
}