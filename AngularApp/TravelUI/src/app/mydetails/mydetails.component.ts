import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  imageg:any=[];
  img:any;

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(){
    this.http.get("http://localhost:3000/clients").subscribe(data=>{
      console.log(data);
      this.imageg = data;
      const file = this.imageg[0].img;
      console.log(this.img);
      const reader = new FileReader();
    reader.onload = (file:any)=>{
      this.img = reader.result as string;
      
    }
    reader.readAsDataURL(file);
    })
  }

}
