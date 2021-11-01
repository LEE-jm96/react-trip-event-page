/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeItem from './ThemeItem';
import Button from './Button';
import { getTheme } from '../apis/tripApis'

const Container = styled.div`
    background-color: beige;
    padding-bottom: 1rem;
`
const Box1 = styled.div`
    display: flex;
`;

const Box2  = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    margin: auto;
    @media screen and (max-width: 768px){
        padding-left: 1rem;
        padding-right: 1rem;
    }
    font-family: "HS";
`;

const text = "제주 상품 더보기";
const Font = styled.div`
    margin: auto;
    width: 150px;
    font-family: "HS";
    text-align: center;
    background: #1AAB8A;
    color:#fff;
    border-radius: 30px;
    height: 40px;
    font-size: 1.4rem;
    padding: 0 1em;
    cursor:pointer;
    transition:800ms ease all;
    outline: none;
    &:hover{
        background:#fff;
        color:#1AAB8A;
    }
`;

const ThemeList = () => {
    const [tme, setTme] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = getTheme().then((result) => setTme(result.data.themes));
                console.log(response);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if(loading){
        return(
            <h1>대기중</h1>
        );
    }

    if(!tme){
        return null;

    }
    return(
        <Container>
            <Button />
            <Box1>
                <Box2>
                    {tme.map(deliver => (
                        <ThemeItem key={deliver.title} deliver={deliver} />
                    ))}
                </Box2>
            </Box1>
            <Font>{text}</Font>
        </Container>
    );
};

export default ThemeList;