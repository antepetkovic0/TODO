import { RECEIVE_DATA, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todos';

const INITIAL_STATE = {
    todos: []
};

export const todosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECEIVE_DATA:
            return {...state, todos: [...state.todos, ...action.payload]}; //copy other props from state, spread todos with new coming
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case TOGGLE_TODO:
            return {...state, todos: state.todos.map((todo) => todo.id !== action.payload ? 
                todo : 
                {...todo, completed: !todo.completed}
                )};
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
        default: 
            return state;
    }
}

export default todosReducer;


