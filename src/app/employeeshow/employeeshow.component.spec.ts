import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeshowComponent } from './employeeshow.component';

describe('EmployeeshowComponent', () => {
  let component: EmployeeshowComponent;
  let fixture: ComponentFixture<EmployeeshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
