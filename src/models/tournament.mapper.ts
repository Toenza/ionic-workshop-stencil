import {Tournament, TournamentDates, TournamentPlace} from "./tournament.model";

export function tournamentMapper(tData: any): Tournament {

  const dates: TournamentDates = new TournamentDates();
  dates.start = new Date(tData.dates.start);
  dates.end = new Date(tData.dates.end);

  const place: TournamentPlace = new TournamentPlace();
  place.city = tData.place.city;
  place.country = tData.place.country;

  return {
    name: tData.name,
    dates: dates,
    type: tData.type,
    system: tData.system,
    place: place,
    participants: tData.participants
  } as Tournament;
}
