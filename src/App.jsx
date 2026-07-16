import { useState ,useRef,useEffect, useCallback} from "react";
import Movies from "./Movies";
import "./App.css"
import { Button } from "react-bootstrap";
import AddMovie from "./AddMovie";
const App=()=>{

  const [movies,setMovies]=useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("");
  const timerRef=useRef(null);


  

  const fetchHandler =useCallback(async ()=>{

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
  } ,[]
);
  function cancelHandler(){
      clearTimeout(timerRef.current);
      setError("");
     }
       useEffect(() => {
    fetchHandler();
    return () => {
      clearTimeout(timerRef.current);
    };
    }, [fetchHandler]);
  

  return (
    <>
   <AddMovie />
    <div className="d-flex justify-content-center flex-row gap-3">
      <Button onClick={cancelHandler}>Cancel Retry</Button>
    </div>
    
    {loading && <h2>Loading...</h2>}
    {error && <p>{error}</p>}
    <Movies movies={movies}/>
    </>
  )
  



}
export default App;