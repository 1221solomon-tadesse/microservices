import { Request, Response } from "express";
import { createTransaction, getTransactionById, listTransactions } from "../services/transactionService";

export const createTransactionHandler = async (req: Request, res: Response) => {
  try {
    const txn = await createTransaction(req.body);
    res.status(201).json(txn);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getTransactionHandler = async (req: Request, res: Response) => {
  const txn = await getTransactionById(req.params.id);
  if (!txn) return res.status(404).json({ error: "Transaction not found" });
  res.json(txn);
};

export const listTransactionsHandler = async (_: Request, res: Response) => {
  const txns = await listTransactions();
  res.json(txns);
};
