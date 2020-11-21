import styled from 'styled-components';

const TextInputContainer = styled.div`
    margin-bottom: 10px;
`;

const TextInput = styled.input`
    display: block;

    &:focus {
        outline: none;
    }
`;

const Label = styled.label`
    display: block;
    font-size: 12px;
    transition: all .4s;
    /* transform: translateY(-17px); */
    ${TextInput}:placeholder-shown + & {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-15px);
    }
`;

export { TextInputContainer, TextInput, Label };