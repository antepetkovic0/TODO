import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleItem, deleteItem } from '../../API';

const Todo = ({ data }) => {
    const { id, title, description, completed } = data;

    const dispatch = useDispatch();

    const handleToggle = () => {
        const status = { completed };
        dispatch(toggleItem(id, status));
    };
    const onTodoDelete = () => dispatch(deleteItem(id));

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleToggle}>finish/not finish</button>
            <button onClick={onTodoDelete}>delete</button>
        </div>
    );
};

export default Todo;