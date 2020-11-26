import React, { useState } from 'react';
import * as S from '../styled/Form.styled';
import { useDispatch } from 'react-redux';
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
            <S.FormTitle>Lets get hands dirty</S.FormTitle>
            <S.TextInput
                type="text"
                placeholder="Enter todo title"
                id="title"
                value={title}
                onChange={handleTitleChange}
                required
            />
            <S.Label htmlFor="title">Title</S.Label>
            <S.TextInput 
                type="text"
                placeholder="Enter short todo description"
                id="description" 
                value={description}
                onChange={handleDescriptionChange}
                required
            />
            <S.Label htmlFor="description">Description</S.Label>
            <S.SubmitButton type="submit">Add todo</S.SubmitButton>
        </S.Form>
    )
}

export default Form;