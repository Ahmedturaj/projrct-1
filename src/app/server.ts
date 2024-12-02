import { Server } from "http";
import app from "./app";
const PORT = 4000;

let server: Server;
async function bootstrap() {
  app.listen(PORT, () => {
    console.log(`The port is running on ${PORT}`);
  });
}
bootstrap();
