import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems=useSelector((store)=>store.cart.items);
 const {loggedInUser}=useContext(UserContext);
  //console.log(dummy);
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
 // useEffect(()=>{console.log("use effect called")},[btnName]);
  return (
    <div className="flex justify-between bg-pink-100 items-center shadow-lg">
      <div className="logo">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div>
        <ul className="flex">
          <li className="p-2 m-1 ">Online Status:{onlineStatus?"✅":"🔴"}</li>
          <li className="p-2 m-1"><Link to="/">Home</Link></li>
          <li className="p-2 m-1 "><a href="/about" >About Us</a></li>
          <li className="p-2 m-1 "><Link to="/contact">Contact Us</Link></li>
          <li className="p-2 m-1 "><Link to="/grocery">Grocery</Link></li>
          <li className="p-2 m-1 "><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
        <button className="p-2 m-1 " onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login");}}>{btnName}</button>
        <li className="p-2 m-1 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
