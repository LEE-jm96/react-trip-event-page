import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: -0.3rem;
    padding-top: 3rem;
    margin-left: 2rem;
    .thumbnail{
        img{
            display: block;
            width: 450px;
            height: 300px;
            margin-left: -4rem;
        }
    }
    .contents{
        background-color: white;
        width: 450px;
        height: 180px;
        margin-left: -4rem;
        h2{
            margin: 0;
        }
        p{
            margin: 0:
            line-height: 1.5;
            white-space: normal;
            font-size: 14px;
        }
        .discount{
            margin-left: 22rem;
            border: 2px solid orange;
            border-radius: 50px;
            background-color: orange;
            color: white;
            font-size: 13px;
        }
        .price_origin{
            text-decoration: line-through;
            color: gray;
            font-size: 20px;
        }
        .p_discount{
            margin-left: 0.5rem;
            text-decoration: none;
            color: red;
            font-size: 20px;
        }
    }
    & + &{
        margin-top: 3rem;
    }
`;

// eslint-disable-next-line react/prop-types
const ThemeItem = ({ deliver }) => {
    // eslint-disable-next-line react/prop-types
    const { location, title, ticket_type,
        // eslint-disable-next-line react/prop-types
        discount, price_origin, price_discounted,thumbnail } = deliver;
    return(
        <Container>
            <span>
                {thumbnail && (
                    <div className="thumbnail">
                        <img src={thumbnail} alt="thumbnail"/>
                    </div>
                )}
                <div className="contents">
                    <h4>{ticket_type}
                        <span className="discount">
                            {discount}할인
                        </span>
                    </h4>
                    <h1>{location}</h1>
                    <h2 className="title">{title}</h2>
                    <span className="price_origin">{price_origin}원</span>
                    <span className="p_discount">{price_discounted}원~</span>
                </div>
            </span>
        </Container>
    )
}

export default ThemeItem;

