
import React, { useState } from "react";

import axios from 'axios';

function App() {

  const [book,setBook] = useState("");
  const [result,setResult] = useState([]);
  
  function handleChange(event){

    const book = event.target.value;

    setBook(book);

  }

  function handleSubmit(event){

    event.preventDefault();

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" +book+"&maxResults=40")
      .then(data => {
        console.log(data.data.items)
        setResult(data.data.items)
      })

    
  }

  return (
    <div className="container">
      <h1>Google Book Search App</h1>
      <form onSubmit={handleSubmit}> 
        <div className= "form-group">
          <input type= "text" onChange={handleChange}
          className= "form-control mt-10" 
          placeholder= "Search Google for Books" 
          autoComplete= "off"/>
        </div>
        <button type= "submit" className= "btn btn-danger">Search</button>
      </form>

      {result.map(book => (
        
        <a target= "_blank"  rel="noreferrer" href={book.volumeInfo.previewLink} key={book.id}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </a>
      ))}
      
    </div>
  );
}

export default App;