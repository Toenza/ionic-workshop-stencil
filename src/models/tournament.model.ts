export class Tournament {
  public name: string;
  public dates: TournamentDates;
  public type: TournamentType;
  public system: string;
  public place: TournamentPlace;
  public participants: string[];
}

export class TournamentDates {
  public start: Date;
  public end: Date;
}

export enum TournamentType {
  CLOSED = 'closed',
  OPEN = 'open'
}

export class TournamentPlace {
  public city: string;
  public country: string;
}
