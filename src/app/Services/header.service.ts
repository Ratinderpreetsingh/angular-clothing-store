import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private apiUrl = 'http://localhost:4000/api/category/getAllCategory';

  constructor(private http: HttpClient) { }

  // Get all categories with subcategories
  getAllCategoryWithSubCategory(): Observable<{ message: string, category: Category[] }> {
    return this.http.get<{ message: string, category: Category[] }>(this.apiUrl);
  }
}
