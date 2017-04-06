import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  businesses: any;
  constructor(
    private retrieveService: RetrieveService
  ) { }


  ngOnInit() {
    // console.log(JSON.stringify(this.retrieveService.getRandomBusinesses()));
    //     console.log(this.retrieveService.getRandomBusinesses());
    //     console.log(Array.isArray(this.retrieveService.getRandomBusinesses()));
    console.log('eee');
    this.retrieveService.getRandomBusinesses().subscribe(businesses => { this.businesses = businesses },
      err => {
        console.log(err);
        return false;
      });
    console.log('eee: ' + this.businesses);
    //   console.log(this.businesses[0]);
    // for (var i = 0; i < this.businesses.forEach; i++) {
    //   console.log(JSON.stringify(this.businesses));
    // }
  }



  generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

}
