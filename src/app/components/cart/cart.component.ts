import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: string[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(){
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });


  }
  addToCart(product: string) {
    this.cartService.addToCart(product);
  }

  clearAll() {
    this.cartService.clearAll()
  }
  removeFromCart(item: string) {
    this.cartService.removeItem(item);
    console.log(this.cartItems );

  }
}
