interface IAddress{
  email: string;
  name: string;
}

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  /**
   * Utilizamos Promise<void> para metodos assincronos,
   * pois metodos assincronos retornam promise
  */
  sendMail(message: IMessage): Promise<void>;
}
