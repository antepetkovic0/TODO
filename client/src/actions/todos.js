export const RECEIVE_DATA = 'RECEIVE_DATA';

//fetch some pre data from db
export const receiveData = (todos) => ({
    type: RECEIVE_DATA,
    payload: todos
});