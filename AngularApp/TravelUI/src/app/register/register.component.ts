import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  contactForm!:FormGroup;
  formData = new FormData();
  fullimg = new FileReader();
  imageurl:any = "./assets/blank-profile-picture-g11cb5e1ca_640.png";
  myReader:FileReader = new FileReader();
  stateList: String[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];


  constructor(private fb:FormBuilder , private http:HttpClient) { }

  ngOnInit(): void {          
            
    this.contactForm = this.fb.group({
      img:[],
      fullName:["",[Validators.required]],
      email:["",[Validators.required]],
      gender:["",[Validators.required]],
      dob:["",[Validators.required]],
      mobileNumber:["",[Validators.required]],
      address:["",[Validators.required]],
      city:["",[Validators.required]],
      state:["",[Validators.required]]
    })
  }


  

    // myReader.onloadend = function(e){
    //   // you can perform an action with readed data here
    //   console.log(myReader.result);
    // }

    

  onSubmit() {
    // const file = this.contactForm.value.img;
    // this.formData.append("file", file);
    // console.log(this.formData)
    this.http.post("http://localhost:3000/clients",this.contactForm.value ).subscribe(res=>{
      console.log("done");
    })
  }

  onchange(event:any){
    const file  =event.target.files[0];

    
    const reader = new FileReader();
    reader.onload = (file:any)=>{
      this.imageurl = reader.result as string;
      console.log(this.imageurl);
    }
    reader.readAsDataURL(file);
  }

}
