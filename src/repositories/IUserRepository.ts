import { User } from "../entities/User";

export interface IUserRepository {
  openProduct(user: User): Promise<void>;
}
