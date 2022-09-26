"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var userCreate_controller_1 = __importDefault(require("../controllers/user/userCreate.controller"));
var userDelete_controller_1 = __importDefault(require("../controllers/user/userDelete.controller"));
var userLogin_controller_1 = __importDefault(require("../controllers/user/userLogin.controller"));
var userUpdate_controller_1 = __importDefault(require("../controllers/user/userUpdate.controller"));
var contactCreate_controller_1 = __importDefault(require("../controllers/contact/contactCreate.controller"));
var contactUpdate_controller_1 = __importDefault(require("../controllers/contact/contactUpdate.controller"));
var verifyIdUser_middleware_1 = __importDefault(require("../middlewares/user/verifyIdUser.middleware"));
var verifyToken_middleware_1 = __importDefault(require("../middlewares/user/verifyToken.middleware"));
var verifyTypeFieldsUser_middleware_1 = __importDefault(require("../middlewares/user/verifyTypeFieldsUser.middleware"));
var verifyIdContact_middleware_1 = __importDefault(require("../middlewares/contact/verifyIdContact.middleware"));
var contactDelete_controller_1 = __importDefault(require("../controllers/contact/contactDelete.controller"));
var contactCapture_controller_1 = __importDefault(require("../controllers/contact/contactCapture.controller"));
var userCapture_controller_1 = __importDefault(require("../controllers/user/userCapture.controller"));
var router = (0, express_1.Router)();
// ROTAS DOS USUARIOS 
router.get("/users/:id", verifyToken_middleware_1["default"], userCapture_controller_1["default"]);
router.post("/users", verifyTypeFieldsUser_middleware_1["default"], userCreate_controller_1["default"]);
router.post("/users/login", userLogin_controller_1["default"]);
router["delete"]("/users/:id", verifyToken_middleware_1["default"], verifyIdUser_middleware_1["default"], userDelete_controller_1["default"]);
router.patch("/users/:id", verifyToken_middleware_1["default"], verifyIdUser_middleware_1["default"], userUpdate_controller_1["default"]);
// ROTAS DOS CONTATOS
router.get("/contacts/:contact_id", verifyToken_middleware_1["default"], contactCapture_controller_1["default"]);
router.post("/contacts", verifyToken_middleware_1["default"], contactCreate_controller_1["default"]);
router.patch("/contacts/:contact_id", verifyToken_middleware_1["default"], verifyIdContact_middleware_1["default"], contactUpdate_controller_1["default"]);
router["delete"]("/contacts/:contact_id", verifyToken_middleware_1["default"], verifyIdContact_middleware_1["default"], contactDelete_controller_1["default"]);
exports["default"] = router;
//# sourceMappingURL=routes.js.map