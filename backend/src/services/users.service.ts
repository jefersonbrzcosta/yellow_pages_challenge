import { User } from "@interfaces/users.interface";
import { sampleUserData } from "../utils/sample-data";

class UserService {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = sampleUserData;
    return users;
  }
}

export default UserService;
