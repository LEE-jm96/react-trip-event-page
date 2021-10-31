import React from 'react';
import styled from 'styled-components';

const button = [
    {
        name: 'first',
        text: '#자연#힐링'
    },
    {
        name: 'second',
        text: '#활동#재미'
    },
    {
        name: 'third',
        text: '#가족#아이'
    }
];

const Container = styled.div`
    display: flex;
    padding-left: 3rem;
    width: 768px;
    margin: 0 auto;
    @media screen and(max-width: 768px){
        width: 100%;
        overflow-x: auto;
    }
`;

const Btn = styled.div`
    font-size: 2.5rem;
    font-family: "HS";
    border: 4px solid orange;
    cursor: pointer;
    white-space: pre;
    text-decoration; none;
    color: inherit;
    padding-bottom: 0.25rem;
    margin-top: 2rem;

    &:hover{
        background-color: orange;
        color: white;
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Button = () => {
    return(
        <Container>
            {button.map(c => (
                <Btn key={c.name}>{c.text}</Btn>
            ))}
        </Container>
    )
}

export default Button;