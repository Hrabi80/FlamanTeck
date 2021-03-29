import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private _url = environment.api_url + '/public';
  constructor(private _http: HttpClient) { }
  getAllServices(): Observable<any>{
    return this._http.get(this._url+'/services/all').pipe(
      catchError(this.errorMgmt)
    );
  }

  addDevis(data:any){
    return this._http.post(this._url+'/devis/add',data);
  }
  addNewsletter(data:any){
    return this._http.post(this._url+'/newsletter/add',data);
  }
  addMessage(data:any){
    return this._http.post(this._url+'/contact/add',data);
  }
  
  getAllRealisations():Observable<any>{
    return this._http.get(this._url+'/realisation/all').pipe(
      catchError(this.errorMgmt)
    );
  }

  getRealisationById(id:number):Observable<any>{
    return this._http.get(this._url+'/realisationById/'+id);
  }


  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
