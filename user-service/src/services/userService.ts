import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export const createUser = async (data: Partial<User>) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.create(data);
  return userRepo.save(user);
};

export const getUserById = async (id: string) => {
  return AppDataSource.getRepository(User).findOneBy({ id });
};
