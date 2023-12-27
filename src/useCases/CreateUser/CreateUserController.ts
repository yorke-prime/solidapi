import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password }  = request.body;


    try {
      await this.createUserUseCase.execute({
        email,
        name,
        password
      })

      return response.status(201).send();
    } catch (error) {
      console.log('ERRO DE TESTE', error);
      
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}