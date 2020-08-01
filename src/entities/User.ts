import { uuid } from "uuidv4";
export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  //Omit<User, "id"> Omitir a propriedade id
  constructor(props: Omit<User, "id">, id?: string) {
    // Pega o objeto props e passa uma por uma
    // dentro do objeto this
    // ex.: this.name = props.name
    //      this.email = props.email

    Object.assign(this, props);

    /**
     * Beneficios ao criar o id no código:
     * Caso seja necessário trocar de banco de dados
     * ou utiizar um que não gere um id automaticamente,
     * garatimos que o  código funcione.
     */
    if (!id) {
      this.id = uuid();
    }
  }
}
