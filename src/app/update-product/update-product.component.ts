import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  id!:number
  product!:Product
  constructor(
    private route: Router,
    private consP:ConsumerProductService,
    private act : ActivatedRoute
  ) {}
  registerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    quantity: new FormControl('', Validators.required),
    like: new FormControl('', Validators.required),
  });


  ngOnInit(){
    //pour récuper id depuis url
    this.id=this.act.snapshot.params['id']
    //appeler la methode getProductById du service consP pour recuperer le produit
    this.consP.getProductById( this.id).subscribe(
      (data)=>{this.product=data;

        //remplir formulaire avec le produit
        this.registerForm.patchValue(this.product as any)
      }
    )
  }

  update() {
    this.consP.updateProduct(this.registerForm.value as any, this.id).subscribe(
        () => this.route.navigateByUrl('/product'),
        () => console.log('error')
    );
}
}
