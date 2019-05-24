"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_express_utils_1 = require("inversify-express-utils");
var bodyParser = require("body-parser");
require("./controller/home");
require("./controller/api");
var container_1 = require("./container");
var server = new inversify_express_utils_1.InversifyExpressServer(container_1.default);
server.setConfig(function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
var serverInstance = server.build();
serverInstance.listen(8888);
console.log("Server started on port 8888 :)");
//# sourceMappingURL=index.js.map