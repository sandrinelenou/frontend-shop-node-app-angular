import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*cart: Cart[] = [];
  cartData;
  categories: Category[];
  categorySub: Subscription;*/
  isAuth = false;
  constructor() { }
  logout(){}

  ngOnInit(): void {
  }

}
