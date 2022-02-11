import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController"
import { GetRecentMessagesController } from "./controllers/GetRecentMessagesController";
import { GetUserProfileController } from "./controllers/GetUserProfileController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.get("/messages/recents", new GetRecentMessagesController().handle)

router.get("/profile", ensureAuthenticated, new GetUserProfileController().handle)

export { router }