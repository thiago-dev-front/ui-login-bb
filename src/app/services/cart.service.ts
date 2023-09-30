import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: string[] = [];
  cartSubject = new BehaviorSubject<string[]>(this.cartItems);

  addToCart(item: string) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  removeItem(item: string) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next([...this.cartItems]);
    }
  }

  clearAll() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cartSubject.asObservable();
  }
}
