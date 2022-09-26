"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var verifyTokenMiddleware = function (req, res, next) {
    var _a;
    try {
        var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        jsonwebtoken_1["default"].verify(token, process.env.SECRET_KEY, function (err, decoded) {
            req.id = decoded.id;
            next();
        });
    }
    catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
exports["default"] = verifyTokenMiddleware;
//# sourceMappingURL=verifyToken.middleware.js.map