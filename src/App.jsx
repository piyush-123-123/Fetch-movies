import { useState ,useRef} from "react";
import Movies from "./Movies";
import "./App.css"
const App=()=>{

  const [movies,setMovies]=useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("");
  const timerRef=useRef(null);
  async function fetchHandler (){

    try{
      setLoading(true);
      setError("");
    const response=await fetch("https://swapi.info/api/films");
    if (!response.ok) {
  throw new Error("Something went wrong");
  }

    const data= await response.json();
    setMovies(data);
    clearTimeout(timerRef.current)
    }
    catch(err){
     setError("Something went wrong... Retrying");
     timerRef.current=setTimeout(()=>{
      fetchHandler();
     },5000);
     

    }
    finally{
      setLoading(false)
      
    }
   

  } 
  function cancelHandler(){
      clearTimeout(timerRef.current);
      setError("");
     }
  

  return (
    <>
    <div className="btn"><button onClick={fetchHandler}>Fetch Movies</button>
    <button onClick={cancelHandler}>Cancel Retry</button>
    </div>
    
    {loading && <h2>Loading...</h2>}
    {error && <p>{error}</p>}
    <Movies movies={movies}/>
    </>
  )
  



}
export default App;