import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RetrieveService {

  user: any;

  constructor(private http: Http) {
  }

  getRandomBusinesses() {
    console.log(this.http.get('http://localhost:3000/users/randombusinesses'));
    let headers = new Headers();
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .map(res => res.json());
    // this.http.get('http://localhost:3000/users/randombusinesses', function (err, results) {
    //   if (err) {
    //   console.log(err);
    //   }
    //  console.log('rrrr',results);
    //   return results;
    // });
  }
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