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

    this.retrieveService.getRandomBusinesses().subscribe(businesses => { this.businesses = businesses },
      err => {
        console.log(err);
        return false;
      });

  }



  generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

}
