import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee1 } from '../modules/employee1';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component implements OnInit{

  constructor(private apiservice:ApiService){}
 
  employeeList:Employee1 = new Employee1;

  //dataToSend: any = "Form Data comming...";
  

  onSubmit(){
    console.log(this.employeeList);
    //this.employeeshowComponent.test();
    //this.dataService.updateData(this.employeeList);

    this.apiservice.saveEmployee(this.employeeList).subscribe({
      next:(data)=> console.log("data save....."),
      error:(e)=>console.log(e),
      complete:()=>console.log("Done")
        
    })
  }

  ngOnInit(): void {
    
  }

}
