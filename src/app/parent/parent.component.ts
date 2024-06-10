import { Component } from '@angular/core';
import { Student } from '../modules/student';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  onDeleteStud(id:number)
  {
    this.studentList = this.studentList.filter(stud =>stud.id != id);
  }

  studentList: Student[] = [
    {
      "id": 1,
      "name": "John Doe",
      "age": 20,
      "grade": "A"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 22,
      "grade": "B"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "age": 21,
      "grade": "A+"
    }
  ]

}
