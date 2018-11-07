import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel.model';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private angularFireDataBase: AngularFireDatabase) { }

  //  modelo
  //    usuario1: UserModel = {
  //   id: '1',
  //   nick: 'fran',
  //   name: 'fran',
  //   status: 'programando',
  // }
  // user: UserModel[] = [this.usuario1];


  getUser() {
    return this.angularFireDataBase.list('/users');
  }
  getUserById(userId) {
    return this.angularFireDataBase.object('/users' + userId);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.firebaseAuth.auth.signInWithPopup(provider);
  }

}
