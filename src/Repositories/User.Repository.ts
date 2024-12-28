import { Repository } from "typeorm";
import { Users } from "../models/User.entities";
import { AppDataSource } from "../database/datasource";
import { IcreateUserTypes, IDeleteTypes } from "../@types/UserType";

export class UserRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

   findByEmail = async (email: string): Promise<Users | null>=> {
    const emailExists = await this.repository.findOne({ where: { email } });

    return emailExists;
  }

  createUser = async(data: IcreateUserTypes): Promise<Users> =>{
    const dataUser = this.repository.create(data);

    const response = await this.repository.save(dataUser);

    return response;
  }

  showUser = async( ) : Promise<Users[] | []> => {
    const users = await this.repository.find();

    return users;
  }

  findById = async(id: string): Promise<Users | null>=> {
    const user = await this.repository.findOne({
      where: { id },
    });
    return user;
  }

  updateUser = async(
    id: string,
    data: Partial<IcreateUserTypes>
  ): Promise<Users | null>=> {
    await this.repository.update(id, data);

    const updateUserData = await this.repository.findOne({
      where: { id },
    });

    return updateUserData;
  }

  removeUser = async (id:string):Promise<IDeleteTypes> =>{
    await this.repository.delete(id)

    return{message: 'User delete '}
  }
}
