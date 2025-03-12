import express from "express";
import createApp from "./app";

// Cria a aplicação
const app = createApp();
const port = process.env.PORT;


// Inicia a aplicação
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

