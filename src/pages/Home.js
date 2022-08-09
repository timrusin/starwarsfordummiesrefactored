import React from "react";
import '../css/Home.css'

const Home = ()=>{

    return(      
<div className="wrapper">
     <div className="crawl">
         <h1 className="opening-title">
         Star Wars
         </h1>
         <div className="opening-subtitle">
         for Dummies
         </div>
         <div className="crawl-sections">
         OK, you may not be a dummy, but you may have also NEVER seen a Star Wars movie in your life. 
         </div>
         <div className="crawl-sections">
         This is a beta version of Star Wars for Dummies with several more features coming soon. 
         </div>
         <div className="crawl-sections">
         In the meantime, feel free to browse some Star Wars Movies, Characters, and Planets.
         more info including, species, vehicles, and starships will be added soon, along with interconnecting information between all of these categories.
         </div>
         <div className="crawl-sections">
         Star Wars for Dummies will not only be for the Star Wars novices, but can also be enjoyed by Star Wars enthusiasts as well.  
         </div>
         <div className="crawl-sections">
         Feel free to nerd out on here with all the specs you can handle.
         </div>
         <div className="crawl-sections">
         May the force be with you.........
         </div>
     </div> 
</div>
    )
}

export default Home