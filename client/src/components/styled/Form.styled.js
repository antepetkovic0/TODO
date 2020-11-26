import styled from 'styled-components';

const Form = styled.form`
    width: 300px;
    background-color: rgba(255,255,255, .8);
    margin-left: 10px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 1.5rem;
`;

const TextInput = styled.input`
    display: block;
    padding: .2rem .2rem;

    &:focus {
        outline: none;
    }
`;

const Label = styled.label`
    display: block;
    font-size: .8rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: .5rem;
    padding-left: .2rem;
    transition: all .4s;
    /* transform: translateY(-17px); */
    ${TextInput}:placeholder-shown + & {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-15px);
    }
`;

const SubmitButton = styled.button`
    width: 5rem;
    margin: 0 auto;
    text-transform: uppercase;
`;

export { Form, FormTitle, TextInput, Label, SubmitButton };