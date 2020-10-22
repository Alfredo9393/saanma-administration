import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './modules/products/add-products/add-products.component';
import { ListProductsComponent } from './modules/products/list-products/list-products.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    ListProductsComponent,
    FooterComponent,
    NavigationComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
