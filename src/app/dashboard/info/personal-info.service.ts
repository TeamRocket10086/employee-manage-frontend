import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    let url:string = "http://localhost:8080/personalinfo";
    return this.http.get(url);
  }

  update(person: Person): Observable<any>{
    let url: string = 'http://localhost:8080/update';

    console.log(person);

    return this.http.post(url, person.email);
  }

  delete(personId: number): Observable<any>{
    let url: string = 'http://localhost:8080/delete/id'
    return this.http.delete(url);
  }
}
