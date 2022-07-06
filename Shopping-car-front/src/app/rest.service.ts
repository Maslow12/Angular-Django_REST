import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestService {
  get(url: any) {
    return this.http.get(url);
  }

  constructor(private http: HttpClient){ 
    
  }
  postAPIData(data:any){
    return this.http.put('http://127.0.0.1:8000/shopping_car/',data)
  }
}
