import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  router: any;

  constructor(
    private userService: UserService,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  async presentToast(error) {
    const toast = await this.toastCtrl.create({
      message: "Error: " + error + ". Retrying...",
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

  loginWithFacebook() {
    this.userService
      .facebookLogin()
      .then(this.router.navigate(["tabs"]))
      .catch(error => this.presentToast(error));
  }
}
