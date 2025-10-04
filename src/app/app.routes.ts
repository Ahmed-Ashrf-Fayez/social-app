import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged/logged.guard';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';


export const routes: Routes = [
    //Old Way 
  /*
  {
    path: '',
    component: AuthComponent,
    title: 'auth',
    children: [
    {path:'',redirectTo:'login',pathMatch:'full'},
      { path: 'register', component: RegisterComponent, title: 'register' },
      { path: 'login', component: LoginComponent, title: 'login' },
    ],
  },
  {
    path: '',
    component: MainComponent,
    title: 'main',
    children: [
      { path: 'home', component: HomeComponent, title: 'home' },
      { path: 'product', component: ProductComponent, title: 'product' },
      { path: 'cart', component: CartComponent, title: 'cart' },
      { path: 'wishlist', component: WishlistComponent, title: 'wishlist' },
      { path: 'checkout', component: CheckoutComponent, title: 'checkout' },
      { path: 'account', component: AccountComponent, title: 'account' },
      { path: 'about', component: AboutComponent, title: 'about' },
      { path: 'contact', component: ContactComponent, title: 'contact' },
    ],
  },
  {path:'**',component:NotfoundComponent,title:'notfound'}
*/

  // Lazyloading Way
  {
    path: '',
    loadComponent:()=>import('./layouts/auth/auth.component').then((e)=>e.AuthComponent),
    title: 'auth',
    children: [
    {path:'',redirectTo:'login',pathMatch:'full'},
      { path: 'register', loadComponent:()=>import('./pages/register/register.component').then((e)=>e.RegisterComponent), title: 'register' },
      { path: 'login', loadComponent:()=>import('./pages/login/login.component').then((e)=>e.LoginComponent), title: 'login' },
    ],
  },
  {
    path: '',
    loadComponent:()=>import('./layouts/main/main.component').then((e)=>e.MainComponent),
    title: 'main',
    children: [
      { path: 'home', loadComponent:()=>import('./pages/home/home.component').then((e)=>e.HomeComponent), title: 'home' },
      { path: 'product', loadComponent:()=>import('./pages/product/product.component').then((e)=>e.ProductComponent), title: 'product' },
      { path: 'cart', loadComponent:()=>import('./pages/cart/cart.component').then((e)=>e.CartComponent), title: 'cart' },
      { path: 'wishlist', loadComponent:()=>import('./pages/wishlist/wishlist.component').then((e)=>e.WishlistComponent), title: 'wishlist' },
      { path: 'checkout', loadComponent:()=>import('./pages/checkout/checkout.component').then((e)=>e.CheckoutComponent), title: 'checkout' },
      { path: 'account', loadComponent:()=>import('./pages/account/account.component').then((e)=>e.AccountComponent), title: 'account' },
      { path: 'about', loadComponent:()=>import('./pages/about/about.component').then((e)=>e.AboutComponent), title: 'about' },
      { path: 'contact', loadComponent:()=>import('./pages/contact/contact.component').then((e)=>e.ContactComponent), title: 'contact' },
    ],
  },
  {path:'**',loadComponent:()=>import('./pages/notfound/notfound.component').then((e)=>e.NotfoundComponent),title:'notfound'}

]
