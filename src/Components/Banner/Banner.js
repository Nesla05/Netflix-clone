import React, { useEffect , useState } from "react";
import axios from '../../axios';
import { API_KEY , imgUrl} from '../../constants/constants'
import './Banner.css'
function Banner() {

const [movie , setMovie] = useState()

useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
  
   setMovie(response.data.results[1])
})
    

},[])
  return (
    <div style={{backgroundImage:`url(${movie ?imgUrl+movie.backdrop_path :""})` }} className="banner">
      <div className="content">
        <h1>{movie ? movie.title :""}</h1>
        <div className="banner_buttons">
          <button>play</button>
          <button>my list</button>
        </div>
        <h3 className="description">{movie ? movie.overview :""}</h3>
      </div>
     <div className="fade"></div>
    </div>
  );
}

export default Banner;
