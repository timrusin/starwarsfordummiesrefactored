import React, { useState, useEffect } from "react";
import '../css/PlanetCard.css'
import { Container,  Spinner } from "reactstrap";

const Planets = ()=>{
    const [planets, setPlanets]= useState()
    const [page, setPage] = useState(1)
    const [isloading, setIsloading] = useState(false)

    const pageUp = ()=>{
        setIsloading(true)
        page === 6 ? setPage(6) : setPage(page+1)
    }
    const pageDown = ()=>{
        setIsloading(true)
        page === 1 ? setPage(1) : setPage(page-1)
    }

    useEffect(()=> {
       fetch(`https://swapi.dev/api/planets/?page=${page}`)
       .then((res)=>res.json())
       .then((json)=>setPlanets(json))
       setTimeout(stopLoading, 1500)
   },[page])

   const stopLoading = () =>{
        setIsloading(false)
   }
   if(!planets || isloading) {
    return (
      <div className="spinner">
        <Spinner color="warning" type="border"></Spinner>
      </div>
      )
   }


   const planetsArray = planets.results
   
   return (
     <Container>
      <div className="button-holder">
       {page > 1 && (
         <div className="page-buttons">
           <button onClick={pageDown} className="prev-next-btn">
             prev
           </button>
         </div>
       )}
       {page < 6 && (
         <div className="page-buttons">
           <button onClick={pageUp} className="prev-next-btn">
             next
           </button>
         </div>
       )}
       </div>
       <div className="card-container">
         {planetsArray.map((item) => {
           return (
             <Container key={item.name}>
               <div className="planet-container">
                 <h1 className="planet-name">{item.name}</h1>
                 <ul className="planet-specs-list">
                   <li>Climate: {item.climate}</li>
                   <li>Diameter: {item.diameter} km</li>
                   <li>
                     Gravity: {item.gravity} (1 is equal to normal gravity)
                   </li>
                   <li>
                     Orbital Period: {item.orbital_period} days to orbit local
                     star
                   </li>
                   <li>Population: {item.population}</li>
                   <li>Rotation Period: {item.rotation_period} hours</li>
                   <li>Surface Water: {item.surface_water} %</li>
                   <li>Terrain: {item.terrain}</li>
                 </ul>
               </div>
             </Container>
           );
         })}
       </div>
       <div className="button-holder">
       {page > 1 && (
         <div className="page-buttons">
           <button onClick={pageDown} className="prev-next-btn">
             prev
           </button>
         </div>
       )}
       {page < 6 && (
         <div className="page-buttons">
           <button onClick={pageUp} className="prev-next-btn">
             next
           </button>
         </div>
       )}
       </div>
     </Container>
   );
}

export default Planets