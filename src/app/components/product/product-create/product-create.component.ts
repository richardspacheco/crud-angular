import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
  }

  willRedirect: boolean = false

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created successfully.')
      if (this.willRedirect) this.router.navigate(['/products'])
      else this.product = {
        name: '',
        price: null,
      }
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
