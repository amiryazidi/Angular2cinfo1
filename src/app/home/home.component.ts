import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title!:string
listProduct!:Product[]
color!:string
priceMax:number=5

constructor(private SP:ProductService){}
ngOnInit(){
  this.title="Welcome 2CINFO1"
  this.color="";
  this.listProduct=this.SP.listProduct
}
alert(){
  alert('hello')
}
increment(i:number){
  this.listProduct[i].like++;

}
buy(i:number){
  if(this.listProduct[i].quantity>0)
  this.listProduct[i].quantity--;

}
}
