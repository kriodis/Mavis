import { UserModel } from "./../../models/userModel.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage implements OnInit {
  userId: any;
  contact: UserModel;
  currentChat: any[];
  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userId = this.activatedRoute.snapshot.params["id"];
    this.userService
      .getUserById(this.userId)
      .valueChanges()
      .subscribe(
        (data: UserModel) => {
          this.contact = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.currentChat = [
      { user: "user", message: "hey, whaasdaaaaaaa aaaaaaaaaaaaaaaaawdawdawdawdadwat are you doing?" },
      { user: "currentUser", message: "learnisdfsdfsdfsdfsdfsdffsd fsdfsdfng angular 4" },
      { user: "user", message: "cool is great" },
      { user: "currentUser", message: "i know that's right" },
      { user: "user", message: "hey, what are you doing?" },
      { user: "currentUser", message: "learnisdfsdfsasdasdsadsadadfsdfsdfsdffsdfsdfsdfng angular 4" },
      { user: "user", message: "cool is greasdat" },
      { user: "currentUser", message: "i know that's right" }
    ];
  }

  chat() {
    const newMessage = Object.assign(this.message, { user: 'anonymous'});
    this.currentChat.push(newMessage);
  }
}
