import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private http: HttpClient) { }

  getBatches() {
    return this.http.get("http://localhost:8500/getBatches");
  }


  write(data: any) {
    const { name, duration, fees } = data;
    alert("Write Succesfully..");
    return this.http.get(`http://localhost:8500/writedata?name=${name}&fees=${fees}&duration=${duration}`);
  }



  delete(data:any){
    return this.http.get(`http://localhost:8500/deletedata?data=${data}`);
  }

  update(data:any){
    const {id, name, duration, fees } = data;
    alert("Update Succesfully..");
    return this.http.get(`http://localhost:8500/updatedata?id=${id}&name=${name}&fees=${fees}&duration=${duration}`);
  }




}




