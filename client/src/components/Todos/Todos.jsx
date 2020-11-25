import React, { useEffect } from 'react';
import Todo from '../Todo/Todo';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../../reducers/todos';

const Todos = () => {
    
    const dispatch = useDispatch();

    //dispatch loading predefined todos
    useEffect(() => {
        const loadData = async () => {
            await dispatch(fetchTodos());
        };
        loadData(); 
    }, [dispatch]);

    const todos = useSelector(state => state.todos);
    console.log(todos);

    return (
        <div style={{marginLeft: "60%"}}>
          <Todo />  
        </div>
    );
};

export default Todos;