import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private FormBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.FormBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(CustomerData){
    console.warn('Your order has been submitted', CustomerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}