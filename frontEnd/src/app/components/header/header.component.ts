import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  panelOpenState = false;
  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
