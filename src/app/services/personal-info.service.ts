import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    let url:string = "http://localhost:8080/personalinfo";
    return this.http.get(url);
  }

  update(): Observable<any>{
    let url: string = 'http://localhost:8080/update';

    console.log();

    return this.http.post(url, '123');
  }

  delete(personId: number): Observable<any>{
    let url: string = 'http://localhost:8080/delete/id'
    return this.http.delete(url);
  }
}
