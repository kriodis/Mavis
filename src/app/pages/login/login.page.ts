import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.userService.facebookLogin().then(
      (data) => {
        console.log(data);
      }).catch(
        (error) => console.log(error)
      )
  }
}
