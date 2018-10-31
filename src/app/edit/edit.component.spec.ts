import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RadioButtonModule } from 'primeng/radiobutton';


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let rowElem: ElementRef;
  let dataForm: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        RadioButtonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;

    rowElem = new ElementRef([0, 'Role 0', true, 'someone', 'Tue Oct 30 2018 14:07:16 GMT-0700 (Pacific Daylight Time)', 0]);
    component.rowElem = rowElem;
    // component.onAdd();
    dataForm = new FormGroup({
      'code': new FormControl(component.rowElem[0]),
      'role': new FormControl(component.rowElem[1]),
      'active': new FormControl(component.rowElem[2]),
      'lastModifiedBy': new FormControl(component.rowElem[3]),
      'lastModifiedAt': new FormControl(component.rowElem[4]),
      'description': new FormControl(component.rowElem[5])
    });
    component.dataForm = dataForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should ')
});
