import { UserService } from './../../services/user.service';
import { UserModel } from './../../models/userModel.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  contacts: UserModel[];
  constructor(private userService: UserService) {
    this.contacts = this.userService.getUser();
  }

  delete(contact) {

  }
  chat(contact) {

  }

}