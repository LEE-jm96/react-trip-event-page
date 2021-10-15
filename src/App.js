import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get('https://8565c6b5-f051-4dfe-8d55-37738289754f.mock.pstmn.io/jeju')
      .then(res => setData(res.data))
  }, []);

  return(
    <div>
      {data}
    </div>
  )
} 

export default App;
