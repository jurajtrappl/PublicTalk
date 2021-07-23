import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [messages, setMessages] = useState([])
  const getData = async() => {
    const res = await axios.get('/index')
    setMessages(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div>
      {messages.map(
        m => 
          <p>
            <h4>Username: {m.username}</h4>
            <h2> Content: {m.content}</h2>
          </p>
        )
      }
    </div>
  )
}

export default App;
