import * as TableActions from './app.actions';

export interface State {
    data: any[];
    columns: string[];
}

const initialState: State = {
    data: [
        [0, 'Role 0', true, 'Someone', new Date(), '0'],
        [1, 'Role 1', false, 'Someone', new Date(), '1'],
        [2, 'Role 2', true, 'Someone', new Date(), '2'],
        [3, 'Role 3', false, 'Someone', new Date(), '3']
    ],
    columns: ['Code', 'Role', 'Active?', 'Last Modified By', 'Last Modified Date/Time', 'Description']
};

export function appReducer(state = initialState, action: TableActions.TableActions) {
    switch (action.type) {
        case TableActions.ADD_DATUM:
            return {
                ...state,
                data: [...state.data, action.payload.newRow]
            };
        case TableActions.EDIT_DATUM:
            const editedData = state.data;
            editedData[action.payload.editedRowIndex] = action.payload.editedRow;
            return {
                ...state,
                data: editedData
            };
        default:
            return state;
    }
}
