import { Router } from "express";
import { createBankHandler, getBankHandler, listBanksHandler } from "../controllers/bankController";

const router = Router();

router.post("/", createBankHandler);
router.get("/", listBanksHandler);
router.get("/:id", getBankHandler);

export default router;
