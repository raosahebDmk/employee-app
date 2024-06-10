import { Component, OnInit } from '@angular/core';
import { Employee1 } from '../modules/employee1';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { error } from 'console';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeeshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employeeshow.component.html',
  styleUrl: './employeeshow.component.css'
})
export class EmployeeshowComponent implements OnInit{

 
  /*  = [
    {
      "id":101,
      "name":"abc",
      "city":"pune"
    },
    {
      "id":102,
      "name":"xyz",
      "city":"latur"
    }
  ]; */

  

  employeeList:Employee1[] = [];
  //employeeList$!:Observable<Employee1[]>;
  

  constructor(private apiservice:ApiService)
  {
    
  }
  ngOnInit(): void {
    
    this.loadData()
  }

  loadData(){
    //this.employeeList$ = this.apiservice.getEmployeeList()
    this.apiservice.getEmployeeList().subscribe({
      next:(data)=>this.employeeList = data,
      error:(e)=>console.log(e),
      complete:()=>console.log("Done")
    })
  }

  

  onDelete(id:number){
    console.log("id: "+id);
    this.apiservice.deleteEmp(id).subscribe({
      next: ()=> {console.log("delete data..")
        this.loadData();
      },
      error:(e)=>console.log(e),
      complete:()=>console.log("Done")
    });
  }

  

}
