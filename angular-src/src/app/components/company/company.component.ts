import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  username: string;
  company: Object;
  constructor(
    private retrieveService: RetrieveService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.username = this.route.snapshot.params['username'];

    this.retrieveService.getCompanyProfile(this.username).subscribe(company => {
      if (!company.success) {
        this.router.navigate(['/']);
      }else{
        this.company = company.user;
      }
    });
  }



}

