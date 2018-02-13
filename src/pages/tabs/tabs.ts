import { Component } from '@angular/core';

import { PlayersPage } from "../players/players";
import {TournamentsPage} from "../tournaments/tournaments";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TournamentsPage;
  tab2Root = PlayersPage;

  constructor() {

  }
}
