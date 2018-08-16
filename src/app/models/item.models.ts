export class Item {
  id: number = Math.floor(Math.random() * 9999);
  soldOut: boolean = false;
  
  constructor(public name: string, public price: number, public qty: number) {}


}