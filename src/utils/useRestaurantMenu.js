import { useState,useEffect } from "react";
const useRestaurantMenu=(resId)=>{
    
 const [resInfo, setresInfo]=useState(null);

 useEffect(()=>{
    menuData();
         },[resId]);

 const menuData= async ()=>
 {
    const restaurantInfo= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json=await  restaurantInfo.json();
    
    setresInfo(json);
}
return resInfo;
}
export default useRestaurantMenu;