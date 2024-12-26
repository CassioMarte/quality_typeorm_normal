import { Repository } from "typeorm";
import { Users } from "../models/User.entities";
import { AppDataSource } from "../database/datasource";
import { IcreateUserTypes, IDeleteTypes } from "../@types/UserType";
import { response } from "express";

export class UserRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

  async findByEmail(email: string): Promise<Users | null> {
    const emailExists = await this.repository.findOne({ where: { email } });

    return emailExists;
  }

  async createUser(data: IcreateUserTypes): Promise<Users> {
    const dataUser = this.repository.create(data);

    const response = await this.repository.save(dataUser);

    return response;
  }

  async showUser(): Promise<Users[] | []> {
    const users = await this.repository.find();

    return users;
  }

  async findById(id: string): Promise<Users | null> {
    const user = await this.repository.findOne({
      where: { id },
    });
    return user;
  }

  async updateUser(
    id: string,
    data: Partial<IcreateUserTypes>
  ): Promise<Users | null> {
    await this.repository.update(id, data);

    const updateUserData = await this.repository.findOne({
      where: { id },
    });

    return updateUserData;
  }

  async removeUser(id:string):Promise<IDeleteTypes>{
    await this.repository.delete(id)

    return{message: 'User delete '}
  }
}
