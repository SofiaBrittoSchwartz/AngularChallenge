import { Action } from '@ngrx/store';

export const ADD_DATUM = 'ADD_DATUM';
export const EDIT_DATUM = 'EDIT_DATUM';

export class AddDatum implements Action {
    readonly type = ADD_DATUM;

    constructor(public payload: {newRow: any[]}) {}
}

export class EditDatum implements Action {
    readonly type = EDIT_DATUM;

    constructor(public payload: {editedRow: any, editedRowIndex: number}) {}
}

export type TableActions = AddDatum | EditDatum;
