import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  href: string;
  name:string="";
  email="";
  panelOpenState = false;
  constructor(public _authService: AuthService,
    public route: ActivatedRoute, 
    private router: Router, 
    public routes: RoutesService) { }

  ngOnInit(): void {
    this._authService.getLoginUser()
  }
  isActive() {
    this.href = this.router.url;
  }

}
