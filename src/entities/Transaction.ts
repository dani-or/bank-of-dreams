import { uuid } from "uuidv4";

export class Transaction {
    
  private readonly id: string;

  private dateTime: string;
  private timestamp: string;
  private amount: string;
  private nature: string;
  private description: string;

  constructor(props: Omit<Transaction, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }
}
