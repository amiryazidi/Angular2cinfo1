import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {
  constructor(private act:ActivatedRoute,private sp:ProductService,private con:ConsumerProductService){}
  id!:number
  product!:any

  ngOnInit(){
    this.id=this.act.snapshot.params['id'];
  //  this.product=this.sp.listProduct.find((p: { id: number; })=>p.id==this.id)
    this.product=this.con.getProductById( this.id).subscribe(
      (data)=>this.product=data
    )
  }
}
