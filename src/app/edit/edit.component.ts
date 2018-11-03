import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TableActions from '../store/app.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() rowElem: ElementRef;
  @Input() rowIndex: number;
  @Input() addNew: boolean;

  dataForm: FormGroup;
  tableState: Observable<{data: any[], columns: any[]}>;

  constructor(private store: Store<{data: any[], columns: any[]}>) { }

  ngOnInit() {
    this.tableState = this.store.select('table');

    if (this.addNew) {
      this.onAdd();
    } else {
      this.onEdit();
    }
  }

  onEdit() {
    this.dataForm = new FormGroup({
      'code': new FormControl(this.rowElem[0], [Validators.required]),
      'role': new FormControl(this.rowElem[1], [Validators.required]),
      'active': new FormControl(this.rowElem[2], [Validators.required]),
      'lastModifiedBy': new FormControl(this.rowElem[3], [Validators.required]),
      'lastModifiedAt': new FormControl(this.rowElem[4], [Validators.required]),
      'description': new FormControl(this.rowElem[5], [Validators.required])
    });
  }

  onAdd() {
    this.dataForm = new FormGroup({
      'code': new FormControl(''),
      'role': new FormControl(''),
      'active': new FormControl(null),
      'lastModifiedBy': new FormControl(''),
      'lastModifiedAt': new FormControl(''),
      'description': new FormControl('')
    });
  }

  onSubmit() {

    if (this.addNew) {
      this.store.dispatch(new TableActions.AddDatum({
        newRow:
        [
          this.dataForm.get('code').value,
          this.dataForm.get('role').value,
          this.dataForm.get('active').value,
          this.dataForm.get('lastModifiedBy').value,
          this.dataForm.get('lastModifiedAt').value,
          this.dataForm.get('description').value
        ]
      }));
      this.onAdd();
      console.log('has added');
      console.log(this.addNew);

    } else {
      this.store.dispatch(new TableActions.EditDatum({
        editedRow:
        [
          this.dataForm.get('code').value,
          this.dataForm.get('role').value,
          this.dataForm.get('active').value,
          this.dataForm.get('lastModifiedBy').value,
          this.dataForm.get('lastModifiedAt').value,
          this.dataForm.get('description').value
        ],
        editedRowIndex: this.rowIndex
      }));
    }


  }
}
