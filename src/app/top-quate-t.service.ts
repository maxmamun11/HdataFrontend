import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TopQuateTService {
  [x: string]: any;
  uri = environment.apiUrl

  constructor(private http: HttpClient) { }
  maxQuaterr(){
    return this.http
    .get(`${this.uri}/advertiser/maxFormat`);
  }
}
