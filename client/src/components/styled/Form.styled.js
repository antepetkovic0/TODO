import styled from 'styled-components';

const Form = styled.form`
    width: 30%;
    /* margin-left: 60%; */
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

const FormTitle = styled.h2`
    padding: 20px 10px;
    text-align: center;
`;

const FormTextarea = styled.textarea`
    width: 100%;
    resize: none;
`;

export { Form, FormTitle, FormTextarea };