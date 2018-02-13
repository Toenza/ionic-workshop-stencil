import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PlayersPage} from "../pages/players/players";
import {HttpModule} from "@angular/http";
import {TournamentsPage} from "../pages/tournaments/tournaments";
import {Camera} from "@ionic-native/camera";
import {Calendar} from "@ionic-native/calendar";

@NgModule({
  declarations: [
    MyApp,
    PlayersPage,
    TournamentsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TournamentsPage,
    PlayersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    Calendar
  ]
})
export class AppModule {
}
