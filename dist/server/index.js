"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const index_1 = require("../controllers/index");
class Server {
    get(url, requestHandler) {
        this.addRoute('get', url, requestHandler);
    }
    post(url, requestHandler) {
        this.addRoute('post', url, requestHandler);
    }
    del(url, requestHandler) {
        this.addRoute('del', url, requestHandler);
    }
    put(url, requestHandler) {
        this.addRoute('put', url, requestHandler);
    }
    addRoute(method, url, requestHandler) {
        this.restify[method](url, requestHandler);
        console.log(`Added route ${method.toUpperCase()} ${url}`);
    }
    start(port) {
        this.restify = restify.createServer();
        this.restify.use(restify.plugins.queryParser());
        this.restify.use(restify.plugins.bodyParser());
        this.addControllers();
        this.restify.listen(port, () => console.log(`Server is up & running on port ${port}`));
    }
    addControllers() {
        index_1.CONTROLLERS.forEach(controller => controller.initialize(this));
    }
}
exports.Server = Server;
exports.default = new Server;
