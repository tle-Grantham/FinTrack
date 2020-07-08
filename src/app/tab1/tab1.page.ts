import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  logs: any[];
  balance: any[];

  constructor(public navCtrl: NavController, public af: AngularFireDatabase, ba: AngularFireDatabase) { 
    af.list('/logs').valueChanges()
      .subscribe(logs => {this.logs = logs;
      });
    ba.list('/balance').valueChanges()
    .subscribe(balance => {this.balance = balance;
    console.log(this.balance);
    });
  }

}
