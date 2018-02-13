export class Player {
  public name: string;
  public title?: string;
  public worldRank: number;
  public achievements?: Achievement[];
  public currentElo: number;
  public highestElo: number;
}

export class Achievement {
  public title: string;
  public date: Date;
}
