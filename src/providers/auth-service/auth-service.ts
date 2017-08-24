import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()


export class User{
  username: string;
  password: string;


  constructor(username: string, password: string){
    this.username = username;
    this.password = password;

  }
}


export class AuthServiceProvider {
  
  currentUser: User;




}
