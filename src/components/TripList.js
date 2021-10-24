import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TripItem from './TripItem';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


const TripListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right; 1rem;
    }
`;

const TripList = () => {
    const [loca, setLoca] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await axios.get(
                    `${process.env.REACT_APP_API_KEY}`,
                );
                setLoca(response.data.locations);
                console.log(response);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if(loading){
        return <TripListBlock>대기 중...</TripListBlock>;
    }

    if(!loca){
        return null;

    }
    return(
        <TripListBlock>
            {loca.map(deliver => (
                <TripItem key={deliver.name} deliver={deliver} />
            ))}
        </TripListBlock>
    );
};

export default TripList;