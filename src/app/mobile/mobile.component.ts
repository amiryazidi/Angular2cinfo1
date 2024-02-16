import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {


  listProduct=[
    {
      id:1,
      title:"Iphone 12",
      price:200,
      quantity:2,
      like:0,
      image:"../../assets/images/iphone.jpg"
    },
    {
      id:2,
      title:"Iphone 11",
      price:150,
      quantity:0,
      like:0,
      image:"../../assets/images/iphone.jpg"

    },
    {
      id:3,
      title:"Iphone X",
      price:100,
      quantity:0,
      like:0,
      image:"../../assets/images/iphone.jpg"
    },

  ]

  afterRecieveData(p:any){
    let index=this.listProduct.indexOf(p);
    this.listProduct[index].like++;
  }
}
