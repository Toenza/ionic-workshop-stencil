import {Player} from "./player.model";

export function playerMapper(playerData: any): Player {
  return {
    name: playerData.name,
    title: playerData.title ? playerData.title : undefined,
    worldRank: playerData.worldRank,
    achievements: playerData.achievements ? playerData.achievements: undefined,
    currentElo: playerData.currentElo,
    highestElo: playerData.highestElo,
  } as Player;
}
