import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get(`${environment.apiBaseUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/users/${id}`);
  }

  addUser(payload: User) {
    return this.http.post(`${environment.apiBaseUrl}/users`, payload);
  }

  updateUser(payload: User) {
    return this.http.put(
      `${environment.apiBaseUrl}/users/${payload.id}`,
      payload
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.apiBaseUrl}/users/${id}`);
  }
}
