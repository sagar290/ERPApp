// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { Console } from '@angular/core/src/console';

@Injectable()
export class AuthProvider {
  users: any;
  public token: any;
  constructor(private storage: Storage) {
    this.users = [
      {
        empID: '101',
        firstName: 'Sagar',
        lastName: 'Dash',
        bio: 'Student',
        region: 'Dhaka',
        pass: '123456789'   
      }
    ];
  }

  login(credentials){

    if (credentials = this.users) {
      console.log(credentials);
      this.storage.set('token', '101');

    }else {
      console.log(credentials);
    }

    
  }

}
