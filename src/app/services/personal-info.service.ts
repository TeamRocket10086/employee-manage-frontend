import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {log} from 'util';
import {catchError} from 'rxjs/operators';
import { Person, Employee, Contact, Address, VisaStatus } from '../dashboard/modules/dto';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  url:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getPersonalInfo(): Observable<any> {
    return this.http.get(this.url + "/personalinfo");
  }

  updatePerson(person : Person): Observable<any> {
    //Angular默认, 不必要加入请求头Content-Type:application/json
    return this.http.put(this.url + "/personalinfo/person", person);
  }

  updateAddress(addr : Address): Observable<any> {
    return this.http.put(this.url + "/personalinfo/address", addr);
  }

  updateEmployee(emp : Employee): Observable<any> {
    return this.http.put(this.url + "/personalinfo/employee", emp);
  }

  updateContact(cons : Contact []): Observable<any> {
    return this.http.put(this.url + "/personalinfo/contact", cons);
  }

  public sendGETRequestWithParameters(PageNo: number, SortOn: number){
    const opts = { params: new HttpParams({fromString: "page=1&limit=10"}) };
    //const params = new HttpParams()
  // .set('page', PageNo)
  // .set('sort', SortOn);
    return this.http.get(this.url + "/personalinfo", opts);
  }

  delete(addressID: number): Observable<any>{
    return this.http.delete(this.url);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
