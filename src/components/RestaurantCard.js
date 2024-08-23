import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const {loggedInUser}=useContext(UserContext);
  const {
    name = "Unknown Restaurant",
    cuisines = [],
    avgRating = "N/A",
    sla = { slaString: "N/A" }, // Default to an object with a default value
    cloudinaryImageId = "",
  } = resData || {}; // Default to empty object

  return (
    <div className="w-40 bg-gray-100 m-4 h-auto">
      <img className="rounded h-24 w-screen"src={IMG_URL+ cloudinaryImageId} alt={name} />
    <div className="font-sans p-2">
    <h5 className="font-bold ">{name}</h5>
      <h6 className="text-sm">{cuisines.join(", ")}</h6>
      <h6 className="text-sm">{avgRating}</h6>
      <h6 className="text-sm">{sla.slaString}</h6>
      <h6 className="text-sm">{loggedInUser}</h6></div> 
    </div>
  );
};

export const withPromotedLabel=(RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="bg-black text-white rounded-lg p-1 absolute">Veg</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;
