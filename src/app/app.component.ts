import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderService } from './Services/header.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Services/products/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HttpClientModule],
  providers:[HeaderService,ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clothing-store';
}
