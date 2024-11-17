import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/products/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number | null = null; // Product ID from route
  productDetail: Product | null = null; // Type safety for a single product

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.id = +id; // Convert string ID to number
        this.fetchProduct(this.id);
      }
    });
  }

  // Fetch product by ID
  private fetchProduct(id: number): void {
    this.productService.getAll_Product_By_Id(id).subscribe(
      response => {
        this.productDetail = response?.product || null; // Assuming response returns a single product
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
