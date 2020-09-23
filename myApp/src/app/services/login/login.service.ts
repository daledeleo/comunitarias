import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'
import { User } from '../../clases/user/user'
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { JwtResponseI, LoginResponse } from '../../interfaces/jwt-response-i'
import * as jwt_decode from "jwt-decode";
import { VoluntariosService } from '../voluntarios/voluntarios.service';
import { GrupoService } from '../grupo-service/grupo.service';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Voluntario } from '../../clases/voluntario/voluntario'
import { Router } from '@angular/router';
import { Api } from '../enum'
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = Api.api + 'user/';
  private apiLogin = Api.api + 'login/';
  authSubject = new BehaviorSubject(false);
  private token = '';
  private headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  gruposApoyos;
  voluntario: Voluntario;
  voluntarios: Voluntario[];

  constructor(private http: HttpClient,
    public router: Router,
    public voluntariosvervice: VoluntariosService,
    public gruposervice: GrupoService,
    private http1: HTTP
  ) {
   }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.' + `Backend returned code ${error.status}, ` +
      `body was: ${error.error.lengthComputable}` + 'An error occurred:' + error.error.message);

  }

  getDecodeAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


  login1(user: User): Promise<HTTPResponse> {
    return this.http1.post(this.apiLogin, user,{});
  }

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiLogin, user);
  }

  logout() {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("EXPIRES_IN")
    this.router.navigateByUrl('/login')
  }
  tokenauth() {
    if (localStorage.getItem("ACCESS_TOKEN") == null) {
      return 0
    } else {
      return 1
    }

  }

  saveToken(token: string, expiresIn: string, userRole: string, userEmail: string, userName: string, userId: string): void {
    localStorage.setItem("ACCESS_TOKEN", token)
    localStorage.setItem("EXPIRES_IN", expiresIn)
    localStorage.setItem("USER_ROLE", userRole)
    localStorage.setItem("USER_EMAIL", userEmail)
    localStorage.setItem("USER_NAME", userName)
    localStorage.setItem("USER_ID", userId)
    this.token = token;
  }

  getUserIdLogin() {
    return localStorage.getItem("USER_ID")
  }

  getUserRolLogin() {
    return localStorage.getItem("userRole")

  }

  private getToken(): string {
    if (this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token
  }

  getLogins() {
    const path = this.api;
    return this.http.get<User[]>(path, { headers: this.headers })
  }

  guardarUsuario(usuario) {
    const path = this.api;
    return this.http.post(path, usuario, { headers: this.headers })
  }

  getUserId(id: any) {
    return this.http.get<User>(this.api + id, { headers: this.headers });
  }

  updateUser(user: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, user, { headers: this.headers });
  }

  deleteUser(id: string) {
    const path = `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }


}
