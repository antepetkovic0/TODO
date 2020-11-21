import React from 'react';
import * as S from '../styled/TextInput.styled';

const FormInput = (props) => {
    const { txt } = props;
    return (
        <S.TextInputContainer>
            <S.TextInput type="text" placeholder={txt} id={txt} required />
            <S.Label htmlFor={txt}>{txt}</S.Label>
        </S.TextInputContainer>
    )
}

export default FormInput;