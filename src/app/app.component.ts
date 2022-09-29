import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { ReactiveValidator } from './reactive';
import { ReactiveServiceService } from './reactive-service.service';
// import { ReactiveValidator } from './reactive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fb: FormBuilder,private reactiveService: ReactiveServiceService){}

  get email(){
    return this.registerForm.get('email');
  }
  get pass(){
    return this.registerForm.get('pass');
  }
  get address(){
    return this.registerForm.get('address');
  }
  get dob(){
    return this.registerForm.get('dob');
  }
  get country(){
    return this.registerForm.get('country');
  }
  get phone(){
    return this.registerForm.get('phone');
  }


  registerForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    pass: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('^(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d$%@#£€*?&]{8,}$')]],
    address: ['',[Validators.required]],
    dob: ['',[Validators.required]],
    country: ['',[Validators.required,ReactiveValidator.validate]],
    phone: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
  })

  selection(e: any){
    let value = e.target.value;
    console.log(value);
    this.registerForm.controls['country'].setValue(value);
  }
  onSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.reactiveService.postDetail(this.registerForm.value).subscribe(data =>{
        console.log(data);
      },
      errors =>console.log(errors))
    }
    else{
      console.log("else");
    }
  }

  
  // selection(event: any) {
    //     let idx = event.target.value;
    //     console.log('id:', idx);
    //     this.registerForm.controls['country'].clearValidators();
    //     if (idx == "select") {
    //       this.registerForm.controls['country'].setValidators([
    //        ReactiveValidator.validate
    //       ]);
    //     }
    //     this.registerForm.updateValueAndValidity();
    // }


  // registerForm = new FormGroup({
  //   email: new FormControl(''),
  //   pass: new FormControl(''),
  //   address: new FormControl(''),
  //   dob: new FormControl(''),
  //   state: new FormControl(''),
  //   country: new FormControl(''),
  // })
}
