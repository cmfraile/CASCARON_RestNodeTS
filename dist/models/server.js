"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var cors = require('cors');
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.httpserver = (0, http_1.createServer)();
        this.io = require('socket.io')(this.httpserver);
        this.paths = { ejemplo: '/api/ejemplo' };
        this.middlewares();
        //this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use(cors());
        this.app.options('*', cors());
    };
    Server.prototype.routes = function () {
        this.app.use(this.paths.ejemplo, require('../routes/ejemplo'));
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.httpserver.listen(this.port, function () {
            console.log("Servidor corriendo en puerto ".concat(_this.port));
            console.log("tsc --watch && nodemon dist/app.js &&");
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map