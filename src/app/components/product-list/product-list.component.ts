import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];
  constructor(private cartService: CartService) { }

  addToCart(product: string) {
    this.cartService.addToCart(product);
    console.log(product);
  }

  ngOnInit(): void {
  }

}
