import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    margin-top: -0.3rem;
`;
const Home = () => {
    return(
        <><div>
            <img src={process.env.PUBLIC_URL + "/jeju.jpg"} width="100%" height="100%" />
        </div><Item>
                <img src={process.env.PUBLIC_URL + "/jeju2.jpg"} width="100%" height="100%" />
            </Item></>
    );
};

export default Home;