import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import * as S from '../styled/Form.styled';

const Form = () => {
    const [registerForm, setRegisterForm] = useState(false);
    return (
        <S.Form onSubmit={() => console.log("sumbinte")}>
            <S.FormTitle>Register</S.FormTitle>
            { registerForm ? (
                <>
                    <input type="text" placeholder="first name"/>
                    <input type="text" placeholder="last name"/>
                    <input type="text" placeholder="email"/>
                </>
            ) : (
                <></>
            )}
            <FormInput txt="username"/>
            <input type="text" placeholder="password"/>
            <input type="submit" value={registerForm ? "register" : "login"}/>
        </S.Form>
    )
}

export default Form;