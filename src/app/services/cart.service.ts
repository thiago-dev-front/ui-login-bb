import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: string[] = [];
  cartSubject = new BehaviorSubject<string[]>(this.cartItems);

  constructor(private router: Router) {}

  addToCart(item: string) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
    this.router.navigate(['/cart']);
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
