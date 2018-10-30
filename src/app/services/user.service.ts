import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usuario1: UserModel = {
    id: '1',
    nick: 'fran',
    name: 'fran',
    status: 'programando',
  }
  usuario2: UserModel = {
    id: '2',
    nick: 'amore',
    name: 'amore',
    status: 'programando',
  }
  usuario3: UserModel = {
    id: '3',
    nick: 'eli',
    name: 'eli',
    status: 'programando',
  }
  usuario4: UserModel = {
    id: '4',
    nick: 'mavis',
    name: 'mavis',
    status: 'programando',
  }
  user: UserModel[] = [this.usuario1, this.usuario2, this.usuario3, this.usuario4];


  getUser() {
    return this.user;
  }
  getUserById(userId) {
    return this.user.find((user) => user.id == userId);
  }


}
