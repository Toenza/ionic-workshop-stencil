import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Tournament} from "../../models/tournament.model";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/first";
import {tournamentMapper} from "../../models/tournament.mapper";
import {Calendar} from "@ionic-native/calendar";

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournaments: Tournament[] = [];
  private readonly path: string = 'assets/data/tournaments.json';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: Http, private calendar: Calendar) {
    this.http.get(this.path)
      .map(res => res.json())
      .first()
      .subscribe(
        data => {
          this.tournaments = data.tournaments.map(
            tournamentData => tournamentMapper(tournamentData)
          );
        }, (err) => {
          console.log('Could not load tournament data');
        }
      );
  }

  ionViewDidLoad() {}

  public saveEvent(tournament: Tournament): void {
    this.calendar.createEventInteractively(
      tournament.name,
      tournament.place.city + ', ' + tournament.place.country,
      null,
      tournament.dates.start,
      tournament.dates.end
    );
  }
}
