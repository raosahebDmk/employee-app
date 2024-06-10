import { Component } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EmployeeListComponent,ParentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
