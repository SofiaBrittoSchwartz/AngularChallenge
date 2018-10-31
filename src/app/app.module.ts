import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {KeyFilterModule} from 'primeng/keyfilter';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { appReducer } from './store/app.reducers';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({table: appReducer}),
    InputTextModule,
    TabMenuModule,
    RouterModule.forRoot([]),
    OverlayPanelModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    InputTextareaModule,
    KeyFilterModule,
    RadioButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
