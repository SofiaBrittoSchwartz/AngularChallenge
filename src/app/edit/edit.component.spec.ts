import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import * as TableActions from '../store/app.actions';
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { RadioButtonModule } from 'primeng/radiobutton';
import * as fromAppReducers from '../store/app.reducers';


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let rowElem: ElementRef;
  let form: FormGroup;
  let addNew: boolean;
  let store: Store<fromAppReducers.State>;

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
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;

    rowElem = new ElementRef([0, 'Role 0', true, 'someone', 'Tue Oct 30 2018 14:07:16 GMT-0700 (Pacific Daylight Time)', 0]);
    component.rowElem = rowElem.nativeElement;

    form = new FormGroup({
      'code': new FormControl(component.rowElem[0]),
      'role': new FormControl(component.rowElem[1]),
      'active': new FormControl(component.rowElem[2]),
      'lastModifiedBy': new FormControl(component.rowElem[3]),
      'lastModifiedAt': new FormControl(component.rowElem[4]),
      'description': new FormControl(component.rowElem[5])
    });
    component.dataForm = form;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create empty form', () => {
    component.addNew = false;
    component.onAdd();

    const codeStatus = component.dataForm.value['code'] === '';
    const roleStatus = component.dataForm.value['role'] === '';
    const activeStatus = component.dataForm.value['active'] === null;
    const lastModifiedByStatus = component.dataForm.value['lastModifiedBy'] === '';
    const lastModifiedAtStatus = component.dataForm.value['lastModifiedAt'] === '';
    const descriptionStatus = component.dataForm.value['description'] === '';

    const formIsEmpty = codeStatus && roleStatus && activeStatus && lastModifiedByStatus && lastModifiedAtStatus && descriptionStatus;
    expect(formIsEmpty).toBeTruthy();
  });

  it('should create correctly prefilled form', () => {
    component.onEdit();
    expect(component.dataForm.value).toEqual(form.value);
  });

  it('should submit if addNew is true', () => {
    component.addNew = true;
    const spy = spyOn(store, 'dispatch');
    const addSpy = spyOn(component, 'onAdd');

    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalled();
  });

  it('should edit if addNew is false', () => {
    component.addNew = false;
    const spy = spyOn(store, 'dispatch');
    const addSpy = spyOn(component, 'onAdd');

    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalled();
    expect(addSpy).not.toHaveBeenCalled();
  });
});
