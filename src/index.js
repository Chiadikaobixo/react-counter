import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [ text, setText] = useState('')

  useEffect(() => {
    const countData = JSON.parse(localStorage.getItem('count'))
    
    if(countData){
      setCount(countData)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  },[count])

  useEffect(() => {
    document.title = count
  },[count])

  return (
    <div>
      <p>The Current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count +1)}>+1</button>
      <button onClick={() => setCount(count -1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
       <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App count={0}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();