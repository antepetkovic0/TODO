import { RECEIVE_DATA, receiveData } from '../actions/todos';

const INITIAL_STATE = {
    todos: [],
    users: []
};

export const todosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECEIVE_DATA:
            return {...state, todos: [...state.todos, action.payload]}; //copy other props from state, spread todos with new coming
        default: 
            return state;
    }
}

export const fetchTodos = () => async (dispatch, getState) => {
    const response = await fetch('http://localhost:5000/api/todos');
    const res = await response.json();
    dispatch(receiveData(res.data));
  } 

export default todosReducer;


