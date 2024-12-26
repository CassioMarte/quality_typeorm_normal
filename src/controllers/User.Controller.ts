import { Request, Response } from "express";
import { UserService } from "../services/User.Service";

export class UserController{
  async createUserController(req:Request, res:Response){
   const userService = new UserService()

   const {name, email, phone} = req.body;

    const user = await userService.createUserService({
      name,
      email,
      phone
    });

    return res.status(201).json(user)
  }
}