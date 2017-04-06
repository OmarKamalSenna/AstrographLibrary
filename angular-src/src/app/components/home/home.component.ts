import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';

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
    this.businesses = this.retrieveService.getRandomBusinesses();
    //   console.log(this.businesses[0]);
    this.gengen();
  }

  gengen() {
    for (var i = 0; i < this.businesses.length; i++) {
      console.log(this.businesses);
    }
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

}
