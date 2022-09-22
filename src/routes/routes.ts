import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteController from "../controllers/user/userDelete.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import usersListController from "../controllers/user/usersList.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";

import contactsListController from "../controllers/contact/contactsList.controller";
import contactCreateController from "../controllers/contact/contactCreate.controller";
import contactUpdateController from "../controllers/contact/contactUpdate.controller";

import verifyIdUserMiddleware from "../middlewares/user/verifyIdUser.middleware";
import verifyTokenMiddleware from "../middlewares/user/verifyToken.middleware";
import verifyTypeFieldsUserMiddleware from "../middlewares/user/verifyTypeFieldsUser.middleware";
import verifyIdContactMiddleware from "../middlewares/contact/verifyIdContact.middleware";
import contactDeleteController from "../controllers/contact/contactDelete.controller";

const router = Router();
// ROTAS DOS USUARIOS 
router.get("/users", usersListController)
router.post("/users", verifyTypeFieldsUserMiddleware, userCreateController)
router.post("/users/login", userLoginController)
router.delete("/users/:id", verifyTokenMiddleware, verifyIdUserMiddleware, userDeleteController)
router.patch("/users/:id", verifyTokenMiddleware, verifyIdUserMiddleware, userUpdateController)

// ROTAS DOS CONTATOS
router.get("/contacts", contactsListController)
router.post("/contacts", verifyTokenMiddleware, contactCreateController)
router.patch("/contacts/:contact_id", verifyTokenMiddleware, verifyIdContactMiddleware, contactUpdateController)
router.delete("/contacts/:contact_id", verifyTokenMiddleware, verifyIdContactMiddleware, contactDeleteController)

export default router
