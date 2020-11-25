import React, { useState } from 'react';
import * as S from '../styled/Form.styled';

const Form = () => {
    return (
        <S.Form onSubmit={() => console.log("sumbinte")}>
            <S.FormTextarea cols="4"></S.FormTextarea>
            <button type="submit">lalal</button>
        </S.Form>
    )
}

export default Form;