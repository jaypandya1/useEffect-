
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [resourceType,setResourceType] = useState('posts');
  const [items,setItems] = useState([]);

  useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
.then((res) => res.json())
.then((json) =>  setItems(json))
  },[resourceType])
  return (
    <>
    
     <button onClick={() => {setResourceType('posts') }}>Posts</button>
     <button onClick={() => {setResourceType('users') }}>Users</button>
     <button onClick={() => {setResourceType('comments') }}>Comments</button>

    
    <h1>{resourceType}</h1>
    {items &&
      items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })
    }
    </>
  );
}

export default App;
