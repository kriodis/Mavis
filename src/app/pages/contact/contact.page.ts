import { UserService } from "./../../services/user.service";
import { UserModel } from "./../../models/userModel.model";
import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "contact.page.html",
  styleUrls: ["contact.page.scss"]
})
export class ContactPage {

  contacts: UserModel[] = [
    {
      id: "1",
      nick: "fran",
      name: "fran",
      status: "programando"
    }
  ];

  constructor(private userService: UserService) {
    // this.contacts = this.userService.getUser();
    // console.log(this.contacts);
  }

  delete(contact) {}
  chat(contact) {}
}
