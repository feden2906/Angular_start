import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  getUserById(id): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }
}

