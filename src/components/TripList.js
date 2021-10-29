import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TripItem from './TripItem';
import {getTrip} from '../apis/tripApis'

const Container = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        padding-left: 1rem;
        padding-right: 1rem;
    }
    font-family: "HS";
    background-color: beige; 
`;

const TripList = () => {
    const [loc, setLoca] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = getTrip().
                then((result)=>setLoca(result.data.locations));
                console.log(response);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if(loading){
        return <Container>대기 중...</Container>;
    }

    if(!loc){
        return null;

    }
    return(
        <Container>
            {loc.map(deliver => (
                <TripItem key={deliver.name} deliver={deliver} />
            ))}
        </Container>
    );
};

export default TripList;