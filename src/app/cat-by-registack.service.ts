import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatByRegistackService {
  [x: string]: any;
  uri = environment.apiUrl

  constructor( private http: HttpClient ) { }
  maxTwintyOneStack(){
    return this.http
    .get(`${this.uri}/advertiser/maxTwintyOneStack`);
  }
}
