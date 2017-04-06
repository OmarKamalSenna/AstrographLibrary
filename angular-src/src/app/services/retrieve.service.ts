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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/company/' + username, { headers: headers }).map(res => res.json());

  }
  getRandomBusinesses() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(JSON.stringify(this.http.get('http://localhost:3000/users/randombusinesses', { headers: headers }).map(res => res.json().aley)));
    this.http.get('http://localhost:3000/users/randombusinesses', { headers: headers }).map(res => res.json().results);

    return this.http.get('http://localhost:3000/users/randombusinesses', { headers: headers }).map(res => res.json().results);

    //console.log(this.http.get('http://localhost:3000/users/randombusinesses'));
  }
  // getUsers(): Observable<User[]> {
  //   return this.http.get(this.URL)
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }

  //return this.http.get('http://localhost:3000/users/randombusinesses');
  // this.http.get('http://localhost:3000/users/randombusinesses', function (err, results) {
  //   if (err) {
  //   console.log(err);
  //   }
  //  console.log('rrrr',results);
  //   return results;
  // });
  // private createObservable(data: any): Observable<any> {
  //     return Observable.create((observer: Observer<any>) => {
  //       observer.next(data);
  //       observer.complete();
  //     });
  //   }

  //   private handleError(error: any) {
  //     console.error(error);
  //     return Observable.throw(error.json().error || 'Server error');
  //   }
  //   getRandomBusinesses(): Observable<Object[]> {
  //     if (!this.businesses) {
  //       let headers = new Headers();
  //       return this.http.get('http://localhost:3000/users/randombusinesses', { headers: headers })
  //         .map((res: Response) => {
  //           this.businesses = res.json();
  //           return this.businesses;
  //         })
  //         .catch(this.handleError);
  //     }
  //     else {
  //       return this.createObservable(this.businesses);
  //     }
  //   }
  //   router.get('/randombusinesses', (req, res) => {
  //      User.getRandomBusinesses(function(err, results){
  //         if (err) console.log(err);
  //          console.log('yesss',results);
  //         res.send(results);
  //      });

  //   //  next();
  // });

  // function (callback) {

  //     User.aggregate([{ $sample: { size: 4 } }], function(err, res) { 
  //        if(err) throw err;
  //       // console.log(res);
  //        callback(err,res);
  //      }); 
  // }
}