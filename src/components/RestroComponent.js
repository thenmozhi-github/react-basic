import { CDN_URL } from "../utils/constants";


const RestroComponent = (props) =>{
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, areaName} = resData?.info;
    const {slaString} =resData.info.sla;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating} Star</h4>
            <h3>{costForTwo}{slaString} </h3>
           
            <h4>{areaName}</h4>

        </div>
    );
}

export default RestroComponent;