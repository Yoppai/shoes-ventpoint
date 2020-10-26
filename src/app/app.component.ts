import { Component } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from './services/user.service'
import { ProductService } from './services/product.service'
import { Product } from 'src/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService,
    ProductService
  ]
})
export class AppComponent {
  public title = 'shoes-ventpoint';
  public identity;
  public token;
  constructor(
    private _userService: UserService,
    private _productService: ProductService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
