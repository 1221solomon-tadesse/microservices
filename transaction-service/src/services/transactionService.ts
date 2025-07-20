import { AppDataSource } from "../config/data-source";
import { Transaction } from "../entities/Transaction";
import { userService, bankService } from "../utils/apiClient";

export const createTransaction = async (data: {
  senderUserId: string;
  receiverUserId: string;
  bankCode: string;
  amount: number;
}) => {
  const { senderUserId, receiverUserId, bankCode, amount } = data;

  // Validate sender/receiver users
  await userService.get(`/users/${senderUserId}`);
  await userService.get(`/users/${receiverUserId}`);

  // Validate bank
  const banks = await bankService.get(`/banks`);
  const bankExists = banks.data.find((b: any) => b.code === bankCode);
  if (!bankExists) throw new Error("Invalid bank code");

  // Create transaction
  const repo = AppDataSource.getRepository(Transaction);
  const txn = repo.create({ ...data });
  return repo.save(txn);
};

export const getTransactionById = async (id: string) => {
  return AppDataSource.getRepository(Transaction).findOneBy({ id });
};

export const listTransactions = async () => {
  return AppDataSource.getRepository(Transaction).find();
};
