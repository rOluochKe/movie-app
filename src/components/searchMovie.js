import React, {useState} from 'react';

export default function SearchMovies() {

  // States - input query, movies
  const [query, setQuery] = useState('');
  
  // Create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8fdc399e9acd396d2f4c07e9121fd89f&language=en-us&query=${query}&incluse_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="input" type="text" name="query" 
              placeholder="i.e Jurassic Park"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
             />
      <button className="button" type="submit">Search</button>
    </form>
  )
}