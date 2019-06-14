import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { products } from '../products';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared, madafaka!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/