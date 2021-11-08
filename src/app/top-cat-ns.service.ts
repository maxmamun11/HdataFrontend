import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TopCatNSService {
  [x: string]: any;
  uri = environment.apiUrl

  constructor(private http: HttpClient) { }

  maxCat(){
    return this.http
    .get(`${this.uri}/advertiser/maxCategory`);
  }
}
