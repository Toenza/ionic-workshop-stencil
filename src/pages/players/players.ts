import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import {Player} from "../../models/player.model";
import {playerMapper} from "../../models/player.mapper";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/first";
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  public players: Player[] = [];
  public images: string[] = [];
  private readonly path: string = 'assets/data/players.json';
  private cameraOptions: CameraOptions;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              private camera: Camera) {
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

    this.cameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    } as CameraOptions;
  }

  ionViewDidLoad() {
  }

  public takePicture(playerName: string) {
    this.camera.getPicture(this.cameraOptions)
      .then((imageData) => {
        this.images[playerName] = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        alert('Failed to take a picture. Error: ' + err);
      });
  }
}
