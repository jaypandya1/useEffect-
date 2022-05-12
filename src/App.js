
import { useState } from 'react';
import './App.css';

function App() {

  const [resourceType,setResourseType] = useState('posts');
  return (
    <>
    <div className="App">
     <button onClick={() => {setResourseType('posts') }}>Posts</button>
     <button onClick={() => {setResourseType('users') }}>Users</button>
     <button onClick={() => {setResourseType('comments') }}>Comments</button>

    </div>
    <h1>{resourceType}</h1>
    </>
  );
}

export default App;
