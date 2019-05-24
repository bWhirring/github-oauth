import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import * as bodyParser from "body-parser";
import "./controller/home";
import "./controller/api";
import containter from "./container";

let server = new InversifyExpressServer(containter);

server.setConfig(app => {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(8888);

console.log("Server started on port 8888 :)");
