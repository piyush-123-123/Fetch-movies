import { useState } from "react";
import Movies from "./Movies";
import "./App.css"
const App=()=>{

  const [movies,setMovies]=useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchHandler (){

    try{
      setLoading(true);
    const response=await fetch("https://swapi.info/api/films");

    const data= await response.json();
    setMovies(data);
    }
    catch(err){
      console.log(err);
    }
    finally{
      setLoading(false)
    }

  } 
  

  return (
    <>
    <div className="btn"><button onClick={fetchHandler}>Fetch Movies</button></div>

    {loading && <h2>Loading...</h2>}
    <Movies movies={movies}/>
    </>
  )
  



}
export default App;