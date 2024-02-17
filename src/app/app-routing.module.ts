import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { AppartementsComponent } from './appartements/appartements.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'',redirectTo:'/product',pathMatch:'full'},
  {path:'product',component:HomeComponent},
  {path:'login',component:ReactiveFormComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'mobile',component:MobileComponent},
  {path:'tv',component:TvComponent},
  {path:'residences',component:ResidencesComponent},
  {path:'product/:id',component:DetailProdComponent},
  {path:'update/:id',component:UpdateProductComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
