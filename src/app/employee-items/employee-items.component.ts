import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Employee } from '../modules/employee';

@Component({
  selector: 'app-employee-items',
  standalone: true,
  imports: [],
  templateUrl: './employee-items.component.html',
  styleUrl: './employee-items.component.css'
})
export class EmployeeItemsComponent {

   @Input() employeeItem!:Employee;

   @Input() name!:String;
   
   @Output() deleteItem = new EventEmitter<number>();

   onDelete(id:number)
   {
      this.deleteItem.emit(id);
   }

}