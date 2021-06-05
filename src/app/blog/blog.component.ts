import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  form: FormGroup;
 
  constructor(
    private formbuilder: FormBuilder,
    
    )  
  {  
    
    this.createForm();
   }

   createForm(){
     this.form = this.formbuilder.group({
       title:['', Validators.compose([

        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5)
        ])],
       body:['', Validators.compose([
         Validators.required,
         Validators.minLength(5),
         Validators.maxLength(500)
       ])]
     })
   }

alert=false

onSubmit(){
  this.alert=true
  this.form.reset({})
}





 ngOnInit(): void {
  }
  
  }
 