export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//fetch some pre data from db
export const receiveData = (todos) => ({
    type: RECEIVE_DATA,
    payload: todos
});

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

//change prop completed to true/false
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});