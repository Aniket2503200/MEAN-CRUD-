import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MarvellousService } from '../marvellous.service';
@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrl: './write.component.css'
})
export class WriteComponent{
  loginForm!:FormGroup;
  allData: any;

  name: string ="";
  duration: string ="";
  fees: string ="";
  id:string="";

  constructor(private marservice:MarvellousService){}

  onSubmit() {
    this.marservice.write({ name: this.name, fees: this.fees , duration: this.duration}).subscribe(res => {
      console.log("Response from server:", res);
    });
  }

  deletedata(id:any){
    this.marservice.delete(id).subscribe(res=>{
      console.log("Response from server:", res);
    });
  }

  onUpdate(){
    this.marservice.update({ id:this.id,name: this.name, fees: this.fees , duration: this.duration}).subscribe(res => {
      console.log("Response from server:", res);
    });
  }




}
