"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constant_1 = require("./constant");
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, constant_1.SECRET_KEY, { expiresIn: constant_1.TOKEN_EXPIRE });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, constant_1.SECRET_KEY);
};
exports.verifyToken = verifyToken;
