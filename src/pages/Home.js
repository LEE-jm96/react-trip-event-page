import React from 'react';

const Home = () => {
    return(
        <div>
            <img src={process.env.PUBLIC_URL + "/jeju.jpg"} width="100%" height="100%"/>
        </div>
    );
};

export default Home;