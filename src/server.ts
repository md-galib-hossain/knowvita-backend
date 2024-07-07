import { Server } from "http";
import app from "./app";
import config from "./app/config";

const main = async () => {
  try {
    const server: Server = app.listen(config.PORT, () => {
      console.log("Server listening on port: ", config.PORT);
    });

    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.log("Server closed");
        });
      }
      process.exit(1);
    };

    process.on("uncaughtException", (error) => {
      console.log(error);
      exitHandler();
    });
    process.on("unhandledRejection", (error) => {
      console.log(error);
      exitHandler();
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
main();
