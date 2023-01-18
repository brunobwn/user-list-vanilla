"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8082;
app.use(express_1.default.json());
app.use(express_1.default.static(__dirname + '/../public'));
app.listen(port, () => console.log(`Server is running in port ${port}`));
