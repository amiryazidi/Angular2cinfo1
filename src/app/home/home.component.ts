import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

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
Stock!:number

constructor(private SP:ProductService,private cl : CalculService,private consP:ConsumerProductService){}
ngOnInit(){
  this.title="Welcome 2CINFO1"
  this.color="";
 // this.listProduct=this.SP.listProduct
 this.consP.getProducts().subscribe(
  (data)=>this.listProduct=data
 )
  this.Stock=this.cl.stat(this.listProduct,'quantity',0)
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
supp(id:number){
  this.consP.deleteProduct(id).subscribe(
    ()=>this.ngOnInit()
  )
}
}
