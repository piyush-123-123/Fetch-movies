
const Movies=({movies})=>{

    return (
       <div className="movies">
        <ul>
       {

        movies.map((movie)=><li key={movie.episode_id}>
        <h2>{movie.title}</h2>
        <p>{movie.opening_crawl}</p>
        </li>)
       }
       </ul>

       </div>
    )

}
export default Movies;