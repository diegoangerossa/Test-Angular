import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find((p) => p.id === productId);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    console.log("Producto ", product.name, " agregado al carro");
  }
}
