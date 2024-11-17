import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:4000/api/product';

  constructor(private http: HttpClient) { }

  // Get all categories with subcategories
  getAll_Products_By_SubCategory(id:number): Observable<{ message: string, products: Product[] }> {
    return this.http.get<{ message: string, products: Product[] }>(`${this.apiUrl}/getAllProduct_By_subcategoryId/${id}`);
  }


  // gey product deari
  getAll_Product_By_Id(id:number): Observable<{ message: string, product: Product }> {
    return this.http.get<{ message: string, product: Product }>(`${this.apiUrl}/getProduct_By_Id/${id}`);
  }
}
