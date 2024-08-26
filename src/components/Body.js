import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
//import restaurantsData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=() =>{
    const {loggedInUser,setUserName}=useContext(UserContext);
    const [data,setdata]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    async function fetchData(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTI");
        const jsondata= await response.json();
        console.log("Cards Data:", jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant?.info));
        setdata(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info));
        setfilteredRestaurant(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info));
    };
    const OnlineStatus=useOnlineStatus();
    if (OnlineStatus===false) return (<h1>Look's like you're offline , check your internet connectivity!</h1>);
    if (data.length===0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="search ">
                <input type="text" className="border border-black m-4 p-4 h-1" value={searchText} onChange={(e)=>{setsearchText(e.target.value);}}></input>
                <button className="bg-green-300 rounded px-2 m-4" onClick={()=>{console.log(searchText);
                    const filteredRestaurant=data.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredRestaurant(filteredRestaurant);
                }}>search</button>
             
                <button className="filter-btn bg-blue-300 rounded m-4 px-2" 
                onClick={()=>{
                    const filteredData = data.filter((res) => res?.avgRating > 4);
                    setfilteredRestaurant(filteredData);
                }}>Top rated restaurants</button>
            
                <label>UserName : </label>
               <input type="text" className="border border-black m-4 p-4 h-1" 
            value={loggedInUser}
             onChange={(e)=>{setUserName(e.target.value);}}></input>
              
            </div>
                <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((res)=>
                    <Link key={res.id} to={"/restaurants/"+res.id}>{res.veg?<RestaurantCardPromoted resData={res}/>:<RestaurantCard  resData={res}/>}</Link>)
}
                
            </div>
        </div>
        
    );
};
export default Body;