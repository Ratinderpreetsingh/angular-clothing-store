import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderService } from '../../Services/header.service';
import { Category } from '../../models/category.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  header:Category[]=[]
  constructor(private headerService:HeaderService){}

  ngOnInit() {
    this.headerService.getAllCategoryWithSubCategory().subscribe(
      (response) => {
        console.log('Categories loaded:', response);
        this.header = response?.category || []; // Make sure to handle undefined or empty response
      },
      (error) => {
        console.log('Error loading categories:', error);
      }
    );
  }
  

}
