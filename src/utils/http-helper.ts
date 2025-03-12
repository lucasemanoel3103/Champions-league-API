import { HttpResponse } from "../models/http-response-model"

// Função que retorna o status 200 OK
export const ok = async (data: any): Promise<HttpResponse> =>{
  return {
    statusCode: 200,
    body: data,
  }
}  

// Função que retorna o status 204 No Content
export const noContent = async (): Promise<HttpResponse> =>{
    return {
      statusCode: 204,
      body: null,
    }
}