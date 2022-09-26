import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteController from "../controllers/user/userDelete.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import userCaptureController from "../controllers/user/userCapture.controller";
import userContactsController from "../controllers/user/userContacts.controller";

import verifyIdUserMiddleware from "../middlewares/user/verifyIdUser.middleware";
import verifyTokenMiddleware from "../middlewares/user/verifyToken.middleware";
import verifyTypeFieldsUserMiddleware from "../middlewares/user/verifyTypeFieldsUser.middleware";
import verifyIdContactMiddleware from "../middlewares/contact/verifyIdContact.middleware";

import contactDeleteController from "../controllers/contact/contactDelete.controller";
import contactCaptureController from "../controllers/contact/contactCapture.controller";
import contactUpdateController from "../controllers/contact/contactUpdate.controller";
import contactCreateController from "../controllers/contact/contactCreate.controller";

const router = Router();
// ROTAS DOS USUARIOS 
router.get("/users/:id", verifyTokenMiddleware, userCaptureController)
router.post("/users", verifyTypeFieldsUserMiddleware, userCreateController)
router.post("/users/login", userLoginController)
router.delete("/users/:id", verifyTokenMiddleware, verifyIdUserMiddleware, userDeleteController)
router.patch("/users/:id", verifyTokenMiddleware, verifyIdUserMiddleware, userUpdateController)

// ROTAS DOS CONTATOS
router.get("/contacts/user", verifyTokenMiddleware, userContactsController)
router.get("/contacts/:contact_id", verifyTokenMiddleware, contactCaptureController)
router.post("/contacts", verifyTokenMiddleware, contactCreateController)
router.patch("/contacts/:contact_id", verifyTokenMiddleware, verifyIdContactMiddleware, contactUpdateController)
router.delete("/contacts/:contact_id", verifyTokenMiddleware, verifyIdContactMiddleware, contactDeleteController)

export default router
