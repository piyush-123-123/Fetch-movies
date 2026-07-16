import { useState ,useRef,useEffect, useCallback} from "react";
import Movies from "./components/Movies";
import "./App.css"
import { Button } from "react-bootstrap";
import AddMovie from "./components/AddMovie";
const App=()=>{

  const [movies,setMovies]=useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("");
  const timerRef=useRef(null);


  

  const fetchHandler =useCallback(async ()=>{

    try{
      setLoading(true);
      setError("");
    const response=await fetch("https://movies-app-66a8a-default-rtdb.firebaseio.com/movies.json");
    if (!response.ok) {
     throw new Error("Something went wrong");
    }

    const data= await response.json();
    let loadedMovies=[];

    for(let key in data){
    loadedMovies.push({
      id:key,
      title:data[key].title,
      releaseDate:data[key].releaseDate,
      openingText:data[key].openingText
      
    })

    }

    setMovies(loadedMovies);
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
  
    async function deleteHandler(id) {
      const response=await fetch(`https://movies-app-66a8a-default-rtdb.firebaseio.com/movies/${id}.json`,{
        method : "DELETE",
      });
      await fetchHandler();
    }

  return (
    <>
   <AddMovie fetchHandler={fetchHandler}/>
    <div className="d-flex justify-content-center flex-row gap-3">
    <Button onClick={cancelHandler}>Cancel Retry</Button>
    </div>
    {loading && <h2>Loading...</h2>}
    {error && <p>{error}</p>}
    <Movies movies={movies} onDelete={deleteHandler} />
    </>
  )
  



}
export default App;