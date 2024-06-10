import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee1 } from './modules/employee1';
import { Observable } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = "http://localhost:8080/employee";

  constructor(private http:HttpClient) { }

  getEmployeeList() {
    console.log("get employees..."+ this.http.get<Employee1[]>(this.api_url));
    return this.http.get<Employee1[]>(this.api_url);

  }

  deleteEmp(id: number):Observable<any>{
    
    console.log("in service : "+id)
    
    return this.http.delete(`${this.api_url}/${id}`);
    
  }


  saveEmployee(emp:Employee1){
    console.log("insert data in service : "+emp);
    return this.http.post(this.api_url,emp);

  }


}
