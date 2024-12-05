import { createServer } from "http";
import MongoSingleton from "./db/database.js";
import app from "./app.js";
import config from "./config/config.js";

MongoSingleton.getInstance();

const server = createServer(app);

const PORT = config.port || 8080;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en produccion en el puerto ${PORT}`);
});

export default server;
