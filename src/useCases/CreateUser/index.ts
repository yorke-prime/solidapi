import { MailTrapMailProvider } from "../../providers/implemetations/MailTrapMailProvider";
import { PostegresUserRepository } from "../../repositories/implemetations/PostegresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailTrapMailProvider()
const postegresUserRepository = new PostegresUserRepository()


const createUserUseCase = new CreateUserUseCase(
  postegresUserRepository,
  mailtrapProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }