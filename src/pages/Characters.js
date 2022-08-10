import React, { useState, useEffect } from "react";
import '../css/CharacterCard.css'
import { Container, Spinner } from "reactstrap";
import { unmountComponentAtNode } from "react-dom";


const Characters = ()=>{
   const [characters, setCharacters]= useState()
   const [page, setPage] = useState(1)
   const [isloading, setIsloading] = useState(false)

   const pageUp = ()=>{
    setIsloading(true)
     page === 8 ? setPage(8) : setPage(page+1)
   }
   const pageDown = ()=>{
    setIsloading(true)
     page === 1 ? setPage(1) : setPage(page-1)
   }

     useEffect(()=> {
        fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((res)=>res.json())
        .then((json)=>setCharacters(json))
        .then(setIsloading(false))
    },[page])
    if(!characters || isloading) {
      return (
        <div className="spinner">
          <Container>
            <Spinner color="warning" type="border"></Spinner>
          </Container>
        </div>
      );
    }
   
    const charactersArray = characters.results

    return(
    <Container>
        <div className="button-holder">
       {page > 1 && (
         <div className="page-buttons">
           <button onClick={pageDown} className="prev-next-btn">
             prev
           </button>
         </div>
       )}
       {page < 8 && (
         <div className="page-buttons">
           <button onClick={pageUp} className="prev-next-btn">
             next
           </button>
         </div>
       )}
       </div>

      <div className="card-container">
        {charactersArray.map((item)=> {
            return (
              <Container key={item.name}>
                <div className="character-container">
                    <h1 className="character-name">{ item.name }</h1>
                      <ul className="item-specs-list">
                          <li>Gender: { item.gender }</li>
                          <li>Height: { item.height } cm</li>
                          <li>Mass: { item.mass } kg</li>
                          <li>Hair Color: { item.hair_color }</li>
                          <li>Skin Color: { item.skin_color }</li>
                      </ul>
                </div>
              </Container>
              )
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
  )
}
export default Characters