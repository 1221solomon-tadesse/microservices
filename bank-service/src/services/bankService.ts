import { AppDataSource } from "../config/data-source";
import { Bank } from "../entities/Bank";

export const createBank = async (data: Partial<Bank>) => {
  const repo = AppDataSource.getRepository(Bank);
  const bank = repo.create(data);
  return repo.save(bank);
};

export const getBankById = async (id: string) => {
  return AppDataSource.getRepository(Bank).findOneBy({ id });
};

export const listBanks = async () => {
  return AppDataSource.getRepository(Bank).find();
};
