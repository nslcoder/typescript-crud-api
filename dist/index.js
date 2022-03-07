"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var app = (0, express_1.default)();
var port = Number(process.env.PORT) || 5000;
app.use(express_1.default.json());
app.use('/api/posts', index_1.router);
app.get('/', function (req, res) {
    res.send('Hello from the TypeScript Express server');
});
app.listen(port, function () {
    console.log("The sever is listening at port ".concat(port));
});
