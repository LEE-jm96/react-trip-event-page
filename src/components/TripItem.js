import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    .thumbnail{
        margin-right: 1rem;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents{
        h2{
            margin: 0;
        }
        p{
            margin: 0:
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
            font-size: 14px;
        }
    }
    .sights{
        color: green;
    }
    & + &{
        margin-top: 3rem;
    }
`;


// eslint-disable-next-line react/prop-types
const TripItem = ({ deliver }) => {
    // eslint-disable-next-line react/prop-types
    const { name, desc, sights, thumbnail } = deliver;
    return(
        <Container>
            {thumbnail && (
                <div className="thumbnail">
                    <img src={thumbnail} alt="thumbnail"/>
                </div>
            )}
            <div className="contents">
                <h2>{name}</h2>
                <p>{desc}</p>
                <p className="sights">{sights}</p>
            </div>
        </Container>
    )
}

export default TripItem;