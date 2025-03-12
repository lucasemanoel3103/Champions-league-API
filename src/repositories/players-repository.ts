import { PlayerModel } from "../models/players-model";

const dataBase: PlayerModel[] = [
    { id: 1, name: 'Endrick' },
    { id: 2, name: 'Lamal' },
];


// This function is responsible for returning all players
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {  
    return dataBase.find(player => player.id === id);
}