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

const text = "#내가 원하는 제주 여행은?";
const Font = styled.div`
    font-family: "HS";
    text-align: center;
    padding-top: 1rem;
`;

const Container = styled.div`
    display: flex;
    width: 300px;
    margin: 0 auto;
    @media screen and(max-width: 768px){
        width: 100%;
        overflow-x: auto;
    }
`;

const Btn = styled.div`
    font-size: 0.83rem;
    font-family: "HS";
    border: 6px solid orange;
    cursor: pointer;
    white-space: pre;
    text-decoration; none;
    color: inherit;
    padding-bottom: 0.25rem;
    background-color: white;
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
        <><Font>
            <span>
                <h2>{text}</h2>
            </span>
        </Font>
        <Container>
            {button.map(c => (
                <Btn key={c.name}>{c.text}</Btn>
            ))}
        </Container></>
    )
}

export default Button;