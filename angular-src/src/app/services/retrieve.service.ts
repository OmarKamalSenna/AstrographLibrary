import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
@Injectable()
export class RetrieveService {

  user: any;

  constructor(private http: Http) {
  }
  getCompanyProfile(username) {
    return this.http.get('http://localhost:3000/company/' + username).map(res => res.json());

  }
  getRandomBusinesses() {
    return this.http.get('http://localhost:3000/users/randombusinesses').map(res => res.json().results);
  }
}