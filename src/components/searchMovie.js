import React from 'react';

export default function searchMovie() {

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting")

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8fdc399e9acd396d2f4c07e9121fd89f&language=en-us&query=${query}&incluse_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <form cla$ssName="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="input" type="text" name="query" placeholder="i.e Jurassic Park"/>
      <button className="button" type="submit">Search</button>
    </form>
  )
}