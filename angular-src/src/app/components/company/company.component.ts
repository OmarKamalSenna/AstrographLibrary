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

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
   
  }

  ngOnInit() {
     this.username = this.route.snapshot.params['username'];
    console.log(this.username + 'wohohooo');

    this.authService.isCompanyProfile(this.username).subscribe(data => {
      console.log(data.success + 'THIS IS DATAA SUCCESS');
      if (!data.success) {
        this.router.navigate(['/']);

      }
    });
  }



}

