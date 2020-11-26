import { receiveData, addTodo, toggleTodo, deleteTodo } from './actions/todos';

const URL = 'http://localhost:5000/api/todos'

//thunks -->
export const fetchTodos = () => async (dispatch, getState) => {
    const response = await fetch(`${URL}`);
    const res = await response.json();
    dispatch(receiveData(res.data));
} 

export const addItem = (todo) => async (dispatch, getState) => {
    const response = await fetch(`${URL}/add`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const res = await response.json();
    if(res.status === 200) {
        dispatch(addTodo(res.data));
    } 
}

export const toggleItem = (id, status) => async (dispatch, getState) => {
    const response = await fetch(`${URL}/toggle/${id}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)
    });
    const res = await response.json();
    if(res.status === 200) {
        dispatch(toggleTodo(id));
    } 
}

export const deleteItem = (id) => async (dispatch, getState) => {
    const response = await fetch(`${URL}/delete/${id}`, { method: 'DELETE' });
    const res = await response.json();
    if (res.status === 200) {
        dispatch(deleteTodo(id));
    }
}