import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsDetailComponent } from "./components/productos/products-detail/products-detail.component";
import { ProductsListComponent } from "./components/productos/products-list/products-list.component";

const AppRoutes: Routes = [
  {path: "", component: ProductsListComponent},
  { path: 'product-list', component: ProductsListComponent },
  { path: 'product/:uxid', component: ProductsDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
