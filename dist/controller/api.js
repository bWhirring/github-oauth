"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var api_1 = require("../service/api");
var types_1 = require("../constant/types");
var ApiController = /** @class */ (function () {
    function ApiController(apiService) {
        this.apiService = apiService;
    }
    ApiController.prototype.oauth = function (code) {
        console.log(code, "code");
        this.apiService.oauth(code);
    };
    __decorate([
        inversify_express_utils_1.httpGet("/oauth"),
        __param(0, inversify_express_utils_1.queryParam("code")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ApiController.prototype, "oauth", null);
    ApiController = __decorate([
        inversify_express_utils_1.controller("/api"),
        __param(0, inversify_1.inject(types_1.default.ApiService)),
        __metadata("design:paramtypes", [api_1.ApiService])
    ], ApiController);
    return ApiController;
}());
exports.ApiController = ApiController;
//# sourceMappingURL=api.js.map