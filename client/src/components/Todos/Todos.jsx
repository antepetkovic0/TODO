import React, { useEffect } from 'react';
import Todo from '../Todo/Todo';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../../API';

const Todos = () => {    
    const dispatch = useDispatch();

    //dispatch loading predefined todos
    useEffect(() => {
        const loadData = () => {
            dispatch(fetchTodos());
        };
        loadData(); 
    }, []);

    const todos = useSelector(state => state.todos);

    return (
        <div style={{marginLeft: "60%"}}>
          {todos.map(item => <Todo key={item.id} data={item} />)}
        </div>
    );
};

export default Todos;