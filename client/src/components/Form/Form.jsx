import React, { useState } from 'react';
import * as S from '../styled/Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../API';

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            title,
            completed: false,
            description
        };
        dispatch(addItem(todo));

        setTitle('');
        setDescription('');
    } 

    return (
        <S.Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                required
            />
            <S.FormTextarea 
                cols="4" 
                value={description}
                onChange={handleDescriptionChange}
                required
            />
            <button type="submit">lalal</button>
        </S.Form>
    )
}

export default Form;