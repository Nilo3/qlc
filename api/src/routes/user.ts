import { Response, Router, Request } from "express"
import { getAllUsers, getOneUser, postUser, updateOneUser, deleteUser } from "../controllers/user"

const router = Router()

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", postUser);
router.put("/:id", updateOneUser);
router.delete("/:id", deleteUser);


export { router }