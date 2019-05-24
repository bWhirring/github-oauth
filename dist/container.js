"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./constant/types");
var api_1 = require("./service/api");
var containter = new inversify_1.Container();
containter.bind(types_1.default.ApiService).to(api_1.ApiService);
exports.default = containter;
//# sourceMappingURL=container.js.map