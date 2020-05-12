import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'authentication',
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'products',
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'orders',
    loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
