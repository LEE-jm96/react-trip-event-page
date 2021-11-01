import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: -0.3rem;
    padding-top: 3rem;
    margin-left: 2rem;
    .thumbnail{
        img{
            display: block;
            width: 150px;
            height: 140px;    
        }
    }
    .contents{
        background-color: #FFF8DC;
        width: 150px;
        height: 160px;
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
            margin-left: 4rem;
            border: 2px solid orange;
            border-radius: 50px;
            background-color: orange;
            color: white;
            font-size: 10px;
        }
        .title{
            font-size: 15px;
        }
        .price_origin{
            text-decoration: line-through;
            color: gray;
        }
        .p_discount{
            margin-left: 0.5rem;
            text-decoration: none;
            color: red;
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
                    <h3>{location}</h3>
                    <h4 className="title">{title}</h4>
                    <span className="price_origin">{price_origin}원</span>
                    <span className="p_discount">{price_discounted}원~</span>
                </div>
        </Container>
    )
}

export default ThemeItem;

