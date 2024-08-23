
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
   const {resId}=useParams();
   const resInfo=useRestaurantMenu(resId);
  
const [showIndex,setShowIndex]=useState(null);
   //const [showItems,setShowItems]=useState(1);
//  useEffect(()=>{menuData();},[resId]);
//  const [resInfo, setresInfo]=useState(null);

//  const menuData= async ()=>
//  {
//     const restaurantInfo= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
//     const json=await  restaurantInfo.json();
//     console.log(json);
//     setresInfo(json);
// }

const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[2]?.card?.card?.info || {};
const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card || [];
//console.log(itemCards);
const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
console.log(categories);
//if(resInfo===null) return <Shimmer/>;
return (
    resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="text-center ">
            <h1 className="font-bold my-2 text-xl">{name}</h1>
            <h5 className="font-bold text-sm">{cuisines} + {costForTwoMessage}</h5>
         
          {/* <ul>
            {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price}</li>
                    ))}
            </ul>   */}
           
    {/* {categories.map((category,index) => 
          <RestaurantCategory key={index} data={category?.card?.card} 
          showIndex={index===showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}
          index={index}/>) } */}
          {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          index={index}
        />
      ))}
        {/* // <li key={category?.card?.card?.itemCards?.id}>
        //     {category?.card?.card?.itemCards?.title}
        // </li>
         */}


        </div>
    )
);
};
export default RestaurantMenu;