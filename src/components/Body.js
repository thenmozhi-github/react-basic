import RestroComponent from "./RestroComponent";
import  listOfRest  from "../utils/dummyData";
import { useState } from "react";

const Body = () => {
    // state variable
    const [resList, setList] = useState(listOfRest);
  
    return(
        <div className="body">
            
            <div className="restro-head"><h2>Restaurants with online food delivery in Chennai</h2></div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    
                    const filteredList = resList.filter(
                        (res) => res.info.avgRating > 4.5
                        );
                   setList(filteredList)
                }}
                >Ratings 4.5+</button>
                <button className="fastDelivery" onClick={() => {
                    const fastDeliveryList = resList.filter(
                        (res) => res.info.sla.deliveryTime < 32
                    )
                    setList(fastDeliveryList)
                }}>Fast Delivery</button>
            </div>
            <div className="restro-container">
            
                {resList.map((restaurants, index) => (
                    <RestroComponent key={restaurants.info.id} resData ={restaurants} />
                ))}
                
            </div>
        </div>
    );
}

export default Body;