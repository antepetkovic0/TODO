import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styled/Home.styled';
import Form from '../Form/Form';

const Home = () => {
    return (
        <S.Home>
            <S.Title>Todozzz</S.Title>
            <Form/>
        </S.Home>
    );
};

export default Home;