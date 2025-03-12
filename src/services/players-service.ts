import * as PlayerRepository from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";

// Função que chama o repositório e retorna os dados dos jogadores
export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  // Se houver dados, retorna 200 OK, senão retorna 204 No Content
  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
