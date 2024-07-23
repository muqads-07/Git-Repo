import { useState } from "react";

import axios from 'axios'

const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

function SearchBar({ setMovies }) {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSearch = () => {
        if (inputValue) {
          axios.get(`${searchAPI}${inputValue}`)
            .then(resp => {
              setMovies(resp.data.results);
            })
            .catch(err => {
              console.log(err);
            });
        }
        else {
            axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0cef49dce8d89376c3e98a86a6b88018&page=1")
              .then(resp => {
                setMovies(resp.data.results);
              })
              .catch(err => {
                console.log(err);
              });
          }
    };

    return (
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter something..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <div>You entered: {inputValue}</div>
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
      );
    }
    
    export default SearchBar;