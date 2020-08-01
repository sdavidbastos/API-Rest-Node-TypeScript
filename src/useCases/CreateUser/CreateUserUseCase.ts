import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

/**
 * S(Single Responsibility principle)
 *    A classe CreateUserUseCase tem somente a responsibilidade
 *  de verificar se o usuario existe ou não e cria-lo.
 *
 *    Se será feito inserção no Banco de Dados ou criação
 *  de um JSON, não importa muito aqui.
 */

/**
 * D(Dependency Inversial principle)
 *  Não há dependencia direta da implementação do repository,
 *  isto é, não estamos utilizando INSERT, UPDATE...
 *
 *  Dependemos da sua abstração.
 */

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlredyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlredyExists) {
      throw new Error("User Alredy Exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: "Dev-League",
        email: "dev-league@gmail.com"
      },
      subject: "Seja bem-vindo à plataforma",
      body: "<p>Você Já pode fazer login na nossa plataforma.</p>"
    })
  }
}
