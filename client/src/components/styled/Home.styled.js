import styled from 'styled-components';
import landingImg from '../../images/landing.jpeg';

const Home = styled.div`
    background-image: linear-gradient(
        105deg,
        transparent 0%,
        transparent 50%,
        rgba(255, 255, 255, .9) 50%
    ),
    url(${landingImg});
    background-size: cover;
    border-radius: 3px;
    height: 100vh;
    width: 100%;

    /* height: 50rem; */
`;

const Title = styled.h1`
    width: 100%;
    color: white;
    text-align: center; 
    text-transform: uppercase;
`;


export { Home, Title };