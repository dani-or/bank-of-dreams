import { uuid } from "uuidv4";
import { Transaction } from "./Transaction";

export  class Product {
    
  private readonly id: string;

  private openDateTimeStamp: number;

  private status : number;

  private balance : number;

  private nature : number;

  private transactions : Array<Transaction>;

  constructor(props: Omit<Product, "id" | "transactions">, id?: string,transactions ? : Array<Transaction> ) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
    if(!transactions){
      this.transactions = new Array<Transaction>();
    }
    
  }
}

