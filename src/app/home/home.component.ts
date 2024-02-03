import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title!:string
listProduct!:Product[]
color!:string
priceMax!:number
ngOnInit(){
  this.title="Welcome 2CINFO1"
  this.color="";
  this.listProduct=[
    {
      id:1,
      title:"Iphone 12",
      price:200,
      quantity:2,
      like:0
    },
    {
      id:2,
      title:"Iphone 11",
      price:150,
      quantity:1,
      like:0
    },
    {
      id:3,
      title:"Iphone X",
      price:100,
      quantity:3,
      like:0
    },
    {
      id:4,
      title:"Iphone 8",
      price:120,
      quantity:1,
      like:0
    },
    {
      id:5,
      title:"Iphone 7",
      price:180,
      quantity:1,
      like:0
    },
  ]
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
