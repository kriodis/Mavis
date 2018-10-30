
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class LoginService {
    constructor(public afDB: AngularFireDatabase) {

    }
    public getConection() {
        return this.afDB.list('/login/');
    }
}
