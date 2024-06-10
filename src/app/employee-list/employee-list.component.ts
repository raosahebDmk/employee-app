import { Component } from '@angular/core';
import { EmployeeItemsComponent } from '../employee-items/employee-items.component';
import { CommonModule } from '@angular/common';
import { Employee } from '../modules/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [EmployeeItemsComponent,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  name = "abc";

  onDeleteItem(id:number){

      this.employeeList = this.employeeList.filter(record => record.id !== id);
  }

  employeeList: Employee[] = [
    {
      "id": 1,
      "name": "John Smith",
      "position": "Software Engineer",
      "department": "Engineering",
      "salary": 80000,
      "hire_date": "2022-03-15"
    },
    {
      "id": 2,
      "name": "Alice Johnson",
      "position": "Marketing Manager",
      "department": "Marketing",
      "salary": 75000,
      "hire_date": "2021-07-20"
    },
    {
      "id": 3,
      "name": "Michael Brown",
      "position": "Financial Analyst",
      "department": "Finance",
      "salary": 85000,
      "hire_date": "2020-12-10"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "position": "HR Specialist",
      "department": "Human Resources",
      "salary": 70000,
      "hire_date": "2023-01-05"
    },
    {
      "id": 5,
      "name": "David Wilson",
      "position": "Product Manager",
      "department": "Product Management",
      "salary": 90000,
      "hire_date": "2022-09-30"
    },
    {
      "id": 6,
      "name": "Jennifer Martinez",
      "position": "Customer Support Representative",
      "department": "Customer Service",
      "salary": 60000,
      "hire_date": "2023-05-18"
    },
    {
      "id": 7,
      "name": "Daniel Thompson",
      "position": "Operations Manager",
      "department": "Operations",
      "salary": 82000,
      "hire_date": "2021-04-03"
    },
    {
      "id": 8,
      "name": "Jessica Lee",
      "position": "Graphic Designer",
      "department": "Design",
      "salary": 65000,
      "hire_date": "2022-11-22"
    },
    {
      "id": 9,
      "name": "Matthew Garcia",
      "position": "Sales Representative",
      "department": "Sales",
      "salary": 70000,
      "hire_date": "2023-08-10"
    },
    {
      "id": 10,
      "name": "Emma Hernandez",
      "position": "Administrative Assistant",
      "department": "Administration",
      "salary": 55000,
      "hire_date": "2021-10-15"
    }
  ]

}
