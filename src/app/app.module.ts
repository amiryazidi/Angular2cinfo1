import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { AppartementsComponent } from './appartements/appartements.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    ResidencesComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailProdComponent,
    AppartementsComponent,
    AddProductComponent,
    ReactiveFormComponent,
    TvComponent,
    MobileComponent,
    ShowOneProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
