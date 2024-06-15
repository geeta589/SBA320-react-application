import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [updates, setNewupdates] = useState([]);
  const [search,setSearchQuery] =useState('react');
  const [url,setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')

  const findnews = () => {
    
      fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
      .then((request) => request.json())
      .then((data) => setNewupdates(data.hits))
      .catch((err) => console.log(err));
  }; 

  useEffect(() => {
    findnews();
  },[url]);

const makeChange=(e)=>{
  setSearchQuery(e.target.value)
}

const handleinput= (e) =>{
  e.preventDefault();
  setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`);
}

  return (
    <>
    <h1>New App</h1>
      <form onSubmit={handleinput}>
        <input type="text" value={search} onChange={makeChange} />
        <button>Search News Here</button>
      </form>
      
      {updates.map((n, i) => (
        <div className="paragraph"> 
        <p key={i}> {n.title} </p>
        </div>
      ))}
    </>
  );
}

export default App;
