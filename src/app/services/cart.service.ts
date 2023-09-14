import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  getItems(): Product[] {
    return this.items;
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart(): Product[]{
    this.items = [];
    return this.getItems();
  }

}
