import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private http: HttpClient) { }

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

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}
