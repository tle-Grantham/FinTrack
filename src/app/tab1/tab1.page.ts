import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  logs: Array<any> = [];
  balance: number;

  constructor(public navCtrl: NavController) {
    this.logs = [
      {amount:'400', type:'Entertainment', date: '3/1/2020'},
      {amount:'360', type:'Food', date: '2/5/2020'}, 
      {amount:'720', type:'Other', date: '1/23/2020'}, 
      {amount:'250', type:'Food', date: '1/1/2020'} 
    ];
    this.balance = 8270;
  }

}
