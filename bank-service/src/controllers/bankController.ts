import { Request, Response } from "express";
import { createBank, getBankById, listBanks } from "../services/bankService";

export const createBankHandler = async (req: Request, res: Response) => {
  try {
    const bank = await createBank(req.body);
    res.status(201).json(bank);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getBankHandler = async (req: Request, res: Response) => {
  const bank = await getBankById(req.params.id);
  if (!bank) return res.status(404).json({ error: "Bank not found" });
  res.json(bank);
};

export const listBanksHandler = async (_: Request, res: Response) => {
  const banks = await listBanks();
  res.json(banks);
};
