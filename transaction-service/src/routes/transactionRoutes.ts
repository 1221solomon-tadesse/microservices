import { Router } from "express";
import {
  createTransactionHandler,
  getTransactionHandler,
  listTransactionsHandler,
} from "../controllers/transactionController";

const router = Router();

router.post("/", createTransactionHandler);
router.get("/", listTransactionsHandler);
router.get("/:id", getTransactionHandler);

export default router;
