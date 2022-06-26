import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AboutUsComponent } from './components/pages/about-us-page/about-us.component';
import { BrandComponent } from './components/brand/brand.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { NavComponent } from './components/nav/nav.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductListSecondComponent } from './components/product-list-second/product-list-second.component';
import { ProductListThirdComponent } from './components/product-list-third/product-list-third.component';
import { PromoComponent } from './components/promo/promo.component';
import { SideBarAboutComponent } from './components/side-bar-about/side-bar-about.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SlideComponent } from './components/slide/slide.component';
import { AccountComponent } from './components/pages/account-page/account.component';
import { AccountContentComponent } from './components/account-content/account-content.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminAddProductComponent } from './components/pages/admin-add-product/admin-add-product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ShoppingCartPageComponent } from './components/pages/shopping-cart-page/shopping-cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { LoginFirstComponent } from './components/login-first/login-first.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartItemMiniComponent } from './components/cart-item-mini/cart-item-mini.component';
import { GoogleTestComponent } from './components/pages/google-test/google-test.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardCustom } from './routes/auth-guard';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { AddressComponent } from './components/address/address.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ProductListCustomComponent } from './components/product-list-custom/product-list-custom.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LandingPageComponent,
    SlideComponent,
    NewProductComponent,
    SideBarComponent,
    ProductListSecondComponent,
    ProductListThirdComponent,
    PromoComponent,
    BrandComponent,
    AboutUsComponent,
    BreadcrumbComponent,
    SideBarAboutComponent,
    AboutContentComponent,
    AccountComponent,
    AccountContentComponent,
    ProductDetailsPageComponent,
    CategoriesComponent,
    AddProductComponent,
    AdminAddProductComponent,
    ShoppingCartPageComponent,
    LoginPageComponent,
    LoginComponent,
    ItemDetailsComponent,
    LoginFirstComponent,
    CartIconComponent,
    CartItemMiniComponent,
    GoogleTestComponent,
    RegisterComponent,
    SearchPageComponent,
    AddressComponent,
    OrderListComponent,
    ManageOrdersComponent,
    ProductListCustomComponent,
    ResetPasswordComponent

  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
    }),

  ],
  providers: [ProductService,ToastrService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
    bootstrap: [AppComponent,]
})
export class AppModule { }
