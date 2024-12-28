import { IcreateUserTypes } from "../@types/UserType";
import { Users } from "../models/User.entities";
import { UserRepository } from "../Repositories/User.Repository";

export class UserService {
  createUserService = async(data: IcreateUserTypes): Promise<Users> =>{
    try {
      const userRepository = new UserRepository();

      const emailExists = await userRepository.findByEmail(data.email);

      if (emailExists) {
        throw new Error("User already registered with this email");
      }

      return await userRepository.createUser(data);
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error");
    }
  }

  showUsers = async():Promise<Users[] | []> =>{
    try {
      const userRepository = new UserRepository()

      const response = await userRepository.showUser()

      return response
    } catch (error) {
      console.error(error)
      throw new Error("Internal server error");
      
    }
  }
}
