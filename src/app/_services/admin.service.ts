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

  //services methods
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

  deleteService(id:any){
    return this._http.delete(this._url+'/client/delete/'+id);
  }

  //Devis methods
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

  getAllMessages():Observable<any>{
    return this._http.get(this._url+'/contact/all').pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteMessage(id:any){
    return this._http.delete(this._url+'/contact/delete/'+id);
  }

  //realisations methods
  AddRealisation(data:any){
    return this._http.post(this._url + '/realisation/add', data , {reportProgress:true , observe:'events'});
  }

  getAllRealisations():Observable<any>{
    return this._http.get(this._url+'/realisation/all').pipe(
      catchError(this.errorMgmt)
    );
  }

  getRealisationById(id:number):Observable<any>{
    return this._http.get(this._url+'/realisation/realisationById/'+id);
  }

  updateRealisation(id:number,data:any){
    return this._http.put(this._url+'/realisation/update/'+id,data);
  }

  deleteRealisation(id:any){
    return this._http.delete(this._url+'/realisation/delete/'+id);
  }
  
  //User methods
  AddUser(data:any){
    return this._http.post(this._url + '/client/add', data , {reportProgress:true , observe:'events'});
  }

  getAllUsers():Observable<any>{
    return this._http.get(this._url+'/client/all').pipe(
      catchError(this.errorMgmt)
    );
  }
   
  deleteUser(id:any){
    return this._http.delete(this._url+'/client/delete/'+id);
  }

  getUserById(id:number):Observable<any>{
    return this._http.get(this._url+'/client/clientById/'+id);
  }

  updateUser(id:number,data:any){
    return this._http.put(this._url+'/client/update/'+id,data);
  }

  updatePassword(id:number, data:any){
    return this._http.put(this._url+'/client/updatePassword/'+id,data);
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



