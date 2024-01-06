import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private Url = 'http://127.0.0.1:5000/authenticate';
  private url = 'http://127.0.0.1:5000/admins'

  constructor(private http: HttpClient) { }

  // makeRequest() {
  //   const url = '/api/some_endpoint'; // Replace with the actual API endpoint
  //   const requestData = { key: 'value' };

  //   return this.http.post(url, requestData);
  // }

  login(username: string, password: string) {
    const data = { username, password }; //storing the unmae and password in the form of dictionary
    return this.http.post(this.Url, data);
}
get_attendance_by_id(emp_id: number): Observable<any>{
  return this.http.get(`${this.url}/${emp_id}`)
}}
