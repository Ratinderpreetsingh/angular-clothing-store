import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [

    { path:'login',component:LoginComponent},
     
    { path:'product/:id',component:ProductsComponent},
    { path:'product-detail/:id',component:ProductDetailComponent},
    { path:'cart',component:CartComponent},

    

];
