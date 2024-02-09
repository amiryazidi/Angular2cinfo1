import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  login= new FormControl('ahmed',Validators.required);
  password= new FormControl('', Validators.required);
  showLogin(){
    console.log(this.login);
    console.log(this.password);
  }

  registerForm !: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      fn: new FormControl('', [Validators.required,Validators.minLength(3)]),
      ln: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
  }

  showForm(){
    console.log(this.registerForm.value)
  }
  reset(){
    this.registerForm.reset();
  }
}
