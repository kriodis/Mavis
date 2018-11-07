import { UserModel } from './../../models/userModel.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  userId: any;
  contact: UserModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserById(this.userId).valueChanges().subscribe(
      (data: UserModel) => {
        this.contact = data;
      },
      (error) => {
        console.log(error);

      })
  }

  ngOnInit() {
    console.log(this.contact);
  }

}
