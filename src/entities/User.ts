import { uuid } from "uuidv4";
import {Product} from "./Product";

export class User {
    
  private readonly id: string;

  private name: string;
  private lastName: string;
  private email: string;
  private password: string;
  private typeDNI: string;
  private DNI: string;
  private products : Array<Product>;

  constructor(props: Omit<User, "id"| "products">, id?: string, products? : Array<Product> ) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
    if(!products){
      this.products = products;
    }
  }
}

