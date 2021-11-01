import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeItem from './ThemeItem';
import { getTheme } from '../apis/tripApis'

const Container = styled.div`
    background-color: beige;
    margin-top: -0.3rem;
`;

const Item = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        padding-left: 1rem;
        padding-right: 1rem;
    }
    font-family: "HS";
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
            <Item>
                {tme.map(deliver => (
                    <ThemeItem key={deliver.title} deliver={deliver} />
                ))}
            </Item>
        </Container>
    );
};

export default ThemeList;