import app from "./app";
import config from "./config";
import { sequelize } from "./config/database";

async function inicializeServer() {
  await sequelize.sync();
  app.listen(config.port, () => {
    console.log(`Server started on ${config.port}`);
  });
}

inicializeServer();
