import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url = environment.api + 'users/';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.url).toPromise()
    .then((response) => {
        return response;
    })
  }

  create(body: UserModel) {
    return this.http.post<any>(this.url, body).toPromise()
    .then((response) => {
        return response;
    })
  }

  updateUser(body: UserModel) {
    return this.http.patch<any>(this.url, body).toPromise()
    .then((response) => {
        return response;
    })
  }

  deleteUser(id: number) {
    const params = new HttpParams().set('id', '1');
    return this.http.delete<any>(this.url + id).toPromise()
    .then((response) => {
        return response;
    })
  }

}
