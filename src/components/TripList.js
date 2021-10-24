import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TripItem from './TripItem';
import axios from 'axios';


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
                    `https://8565c6b5-f051-4dfe-8d55-37738289754f.mock.pstmn.io/locations`,
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