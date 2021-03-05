import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url = environment.api_url + '/api';
  constructor(private _http: HttpClient) { }

  getAllServices(): Observable<any>{
    return this._http.get(this._url+'/services/all').pipe(
      catchError(this.errorMgmt)
    );
  }

  getServiceById(id:number){
    return this._http.get(this._url+'/services/serviceByID/'+id);
  }
  
  updateService(id:number,data:any){
    return this._http.put(this._url+'/services/update/'+id,data);
  }

  getAllDevices():Observable<any>{
    return this._http.get(this._url+'/devis/all').pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteDevis(id:any){
    return this._http.delete(this._url+'/devis/delete/'+id);
  }

  getAllNewsletter():Observable<any>{
    return this._http.get(this._url+'/newsletter/all').pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteNewsletter(id:any){
    return this._http.delete(this._url+'/newsletter/delete/'+id);
  }

  AddRealisation(data:any){
    return this._http.post(this._url + '/realisation/add', data , {reportProgress:true , observe:'events'});
  }

  getAllRealisations():Observable<any>{
    return this._http.get(this._url+'/realisation/all').pipe(
      catchError(this.errorMgmt)
    );
  }



  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}



