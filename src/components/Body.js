import { useEffect, useState } from "react";
import ResList from "../consts/mockdata";

const Body= ()=> {

    const [ResListNew,setResListNew] =useState([...ResList]);

return(
    <div className="body">
<div className="filter">
<button className="filter-btn" 

onClick={()=>{
    const newResList = [];
     for(let Res of ResList){
        if(Res.data.avgRating > 4){
            newResList.push(Res);
        }
     }
setResListNew(newResList);
}}>
Top Rated Restaurent
</button>

</div>
    <div className="restaurent">
       {
        ResListNew.map((restaurent)=>(
            <Res key={restaurent.data.id} ResData  ={restaurent}/>
     ))}
    </div>
    </div>
    
    );
    };

    const Res =(props)=> {
        const {ResData} = props;
    
    const
    {
     cloudinaryImageId, 
     name,
     cuisines , 
     avgRating, 
     costForTwo}= ResData?.data;

     const logoImage= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";



        return(
            <div className="res-card">
              <div className="jh">
              <img 
              className="dom"
              src={logoImage + cloudinaryImageId}
              />
                        <h3>{name}</h3>
                        <h4>{cuisines.join(',')}</h4>
                        <h4>{avgRating} Stars</h4>
                        <h4>{costForTwo/100} Cost for Two</h4>
    
              </div>
            </div>
        );
    };
    
    export default Body;