"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../utils/jwt");
const router = express_1.default.Router();
//User
const user = [{
        id: 1,
        username: "sso",
        password: bcryptjs_1.default.hashSync("passwordsso", 10)
    }];
//endpoint
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const requestUser = yield user.find((u) => u.username == username);
        if (!requestUser || !(yield bcryptjs_1.default.compare(password, requestUser.password))) {
            res.status(401).json({ 'message': 'Invalid Incredential' });
        }
        const token = (0, jwt_1.generateToken)({ userId: requestUser.id });
        res.json({ token });
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
