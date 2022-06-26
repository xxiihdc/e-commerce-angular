import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { AboutUsComponent } from './components/pages/about-us-page/about-us.component';
import { AccountComponent } from './components/pages/account-page/account.component';
import { AdminAddProductComponent } from './components/pages/admin-add-product/admin-add-product.component';
import { GoogleTestComponent } from './components/pages/google-test/google-test.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { ShoppingCartPageComponent } from './components/pages/shopping-cart-page/shopping-cart-page.component';
import { ProductListCustomComponent } from './components/product-list-custom/product-list-custom.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthGuardCustom } from './routes/auth-guard';


const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'product/:id', component: ProductDetailsPageComponent },
  { path: 'reset/:id', component: ResetPasswordComponent },
  { path: 'cart', component: ShoppingCartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'google/:id', component: GoogleTestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'products', component: ProductListCustomComponent },
  { path: 'admin/products', component: AdminAddProductComponent,canActivate: [AuthGuardCustom]},
  { path: 'admin/orders', component: ManageOrdersComponent,canActivate: [AuthGuardCustom]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
