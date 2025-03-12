import express from "express";
import router from "./routes/routes";

// Função que cria a aplicação
function createApp() {
  const app = express();

  // Configuração da aplicação
  app.use(express.json());
  app.use("/api", router);

  return app;
}

export default createApp;

