import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      display: 'flex',
      height: '50px',
      width: '3550px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: '16px',
      color: 'white',
      fontSize: '36px', 
    };

    return <div style={style}>코멘토 안녕하세요!</div>;
  }
}

export default App;
