import { Request, Response } from "express";
import { getPlayerService } from "../services/players-service";

// Função que chama o serviço e retorna os dados dos jogadores
export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };