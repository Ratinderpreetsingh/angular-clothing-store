import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../Services/products/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = []; // Type safety for products
  id: number | null = null; // Subcategory ID from route
  isLoading: boolean = true; // Loading state
  error: string | null = null; // Error state

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = +id; // Convert string to number
        this.fetchProducts(this.id); // Fetch products with the ID
      }
    });
  }

  fetchProducts(id: number): void {
    this.isLoading = true;
    this.productService.getAll_Products_By_SubCategory(id).subscribe(
      (response) => {
        this.products = response?.products || []; // Safely access products
        this.isLoading = false; // Turn off loading state
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.error = 'Failed to fetch products. Please try again later.';
        this.isLoading = false; // Turn off loading state
      }
    );
  }
}
