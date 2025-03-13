import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

// Função que chama o repositório e retorna os dados dos jogadores
export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  // Se houver dados, retorna 200 OK, senão retorna 204 No Content
  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  //pedir pro repositório de dados 
  const data =  await PlayerRepository.findPlayerById(id);
  let response = null;

  if(data){
    response = httpResponse.ok(data);
  }else{
    response = httpResponse.noContent();
  }

  return response;
};

