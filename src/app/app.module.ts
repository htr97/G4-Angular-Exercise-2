import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/productos/products/products.component';
import { ProductsListComponent } from './components/productos/products-list/products-list.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsDetailComponent } from './components/productos/products-detail/products-detail.component';
import { AppRoutingModule } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsListComponent,
    NavComponent,
    ProductsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
