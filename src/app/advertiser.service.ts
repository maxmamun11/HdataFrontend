import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  uri = environment.apiUrl

  constructor(private http: HttpClient) { }

  maxQuater(){
    return this.http
    .get(`${this.uri}/advertiser/maxQuater`);
    

  }
}
