import { Food } from "./food";

export class CartItem{
  static food: any;
  constructor(public food: Food){
  }
  quantity: number = 1;
  price: number = this.food.price;
}
