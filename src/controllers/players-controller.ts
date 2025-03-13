import { Request, Response } from "express";
import * as service from "../services/players-service";

// Função que chama o serviço e retorna os dados dos jogadores
export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await service.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };

// Função que chama o serviço e retorna os dados de um jogador
  export const getPlayerById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };

  export const postPlayer = async (req: Request, res: Response) => {
    const
  }