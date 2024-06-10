import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../modules/student';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() studentList!:Student;
  
  @Output() deleteStudent = new EventEmitter<number>();

  onDelete(id:number)
  {
    this.deleteStudent.emit(id);
  }

}
