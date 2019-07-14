import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private auth: AuthService,
    private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if(this.auth.isAuthenticated()) {
          
            return of(true)
        } else {
          
            this.router.navigate(['/login'], {
                queryParams: {
                accessDenied: true
                }
            })
            
            return of(false)
        }
    }
}
