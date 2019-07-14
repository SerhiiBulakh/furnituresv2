import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null
  constructor() { }


  login (user): Observable<object> {
   
    this.setToken(`wrqwrq${user.password}`)
    return of(user)
    
  
}

setToken (token: string) {
    this.token = token
}

getToken (): string {
    return this.token
}

isAuthenticated(): boolean {
    return !!this.token
}

logout() {
    this.setToken(null)
    
}
}
