import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = false ;

  get userIsAuthenticated() {
    return this._userIsAuthenticated
  }

  constructor() { }

  logIn(){
    // auth ==> serveur TOKEN ...
    this._userIsAuthenticated = true ;
  }

  logOut(){
    this._userIsAuthenticated = false;
  }

}
