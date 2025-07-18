import { Router } from "express";
import { createUserHandler, getUserHandler } from "../controllers/userController";

const router = Router();

router.post("/", createUserHandler);
router.get("/:id", getUserHandler);

export default router;
