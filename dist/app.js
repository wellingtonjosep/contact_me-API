"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var appError_1 = require("./errors/appError");
var routes_1 = __importDefault(require("./routes/routes"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(routes_1["default"]);
app.use(function (err, request, response, _) {
    if (err instanceof appError_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
app.listen(4000);
console.log("Servidor online");
exports["default"] = app;
//# sourceMappingURL=app.js.map