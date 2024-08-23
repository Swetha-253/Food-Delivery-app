import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-center m-2 p-2 font-bold">Cart</h1>
        <button className="bg-black text-white rounded px-2 mb-2" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length===0 && (<h1>Cart is empty. Add Items to Cart</h1>)}
        <div className="w-5/12">
            <ItemList items={cartItems}></ItemList>
        </div>
    </div>
    )
}
export default Cart;