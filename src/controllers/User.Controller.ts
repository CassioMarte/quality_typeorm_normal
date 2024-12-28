import { Request, Response } from "express";
import { UserService } from "../services/User.Service";
import { Users } from "../models/User.entities";


export class UserController{ //
  createUserController = async (req: Request, res: Response): Promise<Response> => {
    const userService = new UserService();
    const { name, email, phone } = req.body;
    
    const user = await userService.createUserService({
      name,
      email,
      phone
    });
    
    return res.status(201).json(user);
  }

  showUserController = async(req:Request, res:Response):Promise<Response>=>{
    const userService = new UserService()

    const users = await userService.showUsers()

    return res.status(200).json({
      data:users,
      total: users.length
    })
  }
}