import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatByRegiQTService {
  [x: string]: any;
  uri = environment.apiUrl

  constructor(private http: HttpClient) { }
  maxTwintyOneRegi(){
    return this.http
    .get(`${this.uri}/advertiser/maxTwintyOneRegi`)
  }
}
