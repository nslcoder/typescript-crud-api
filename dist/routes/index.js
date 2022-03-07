"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = (0, express_1.Router)();
var posts = [
    {
        id: 1,
        title: 'Post 1',
        description: 'This is longer text',
    },
    {
        id: 2,
        title: 'Another Post',
        description: 'Random text comes here',
    },
];
exports.router.get('/', function (req, res) {
    res.send(posts);
});
exports.router.get('/:id', function (req, res) {
    var id = req.params.id;
    res.send(posts[Number(id) - 1]);
});
