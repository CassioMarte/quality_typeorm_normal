import { createApp } from "../app";
import request from 'supertest';
import expres, {Express} from 'express'

let app : Express

beforeAll(async()=>{
  app = await createApp()
})

afterAll(async()=>{
  
})