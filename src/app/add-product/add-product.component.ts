import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
    registerForm= new FormGroup({
      id: new FormControl('',Validators.required),
      price: new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$")]),
      title: new FormControl('',[Validators.required,Validators.minLength(3)]),
      quantity: new FormControl('',Validators.required),
      like: new FormControl('',Validators.required),
     });

     ajouter(){
      console.log(this.registerForm.value);
     }
}
