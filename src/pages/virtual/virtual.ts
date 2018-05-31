import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-virtual',
  templateUrl: 'virtual.html'
})
export class VirtualPage {
  users = [];
  page = 0;
  maximumPages = 3;
 
  constructor(public navCtrl: NavController, private httpClient: HttpClient) {
    this.loadUsers();
  }

  loadUsers(){
    this.httpClient.get(`https://randomuser.me/api/?results=100`)
    .subscribe(res => {
      this.users = res['results'];
    })
  }
}