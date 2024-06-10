import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Form1Component } from './form1/form1.component';
import { EmployeeshowComponent } from './employeeshow/employeeshow.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent,Form1Component,EmployeeshowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-app';
}
