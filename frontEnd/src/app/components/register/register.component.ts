import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData =<any>{};
  constructor(private _authService : AuthService) { }

  registerUser(){
    this._authService.registerUser(this.registerUserData)
                      .subscribe(
                        res => console.log(res),
                        err => console.log(err)
                      )
  }

  ngOnInit(): void {
  }

}