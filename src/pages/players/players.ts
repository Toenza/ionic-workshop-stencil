import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import {Player} from "../../models/player.model";
import {playerMapper} from "../../models/player.mapper";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/first";

@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  public players: Player[];
  private path: string = '../../assets/data/players.json';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get(this.path)
    .map(res => res.json())
    .first()
      .subscribe(
        data => {
          this.players = data.players.map(
            playerData => playerMapper(playerData)
          );
        }, (err) => {
          console.log('Could not load player data');
        }
      );
  }

  ionViewDidLoad() {
  }
}
