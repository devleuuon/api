import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // injeção de dependência do módulo httpclient
    private httpClient: HttpClient
    ) {}

    urlLogin = "http://localhost:3000/signin";

    // post de login
    logarUsuario(usuario: User): Observable<any> {
      return this.httpClient.post( this.urlLogin, JSON.stringify(usuario),{
      headers: new HttpHeaders ( {"content-type": "application/json"} ),
      observe: "response"
    } ) 
  }
}
