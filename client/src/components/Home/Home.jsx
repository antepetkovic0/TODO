import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styled/Home.styled';
import Form from '../Form/Form';
import Todos from '../Todos/Todos';

const Home = () => {
    return (
        <S.Home>
            <S.Title>Todozzz</S.Title>
            <Form/>
            <Todos />
        </S.Home>
    );
};

export default Home;