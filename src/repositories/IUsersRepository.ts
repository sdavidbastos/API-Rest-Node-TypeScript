import { User } from "../entities/User";

/**
 *L (Liskov Substitution)
 *
 *    Faz um contrato dentro do repositorio e 
 *  não interessa se utiliza mongo, psql, mysql...
 * 
 *    Se tiver os métodos da interface é o suficinete
 *  para funcionar.
 */

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
