
import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice"; 

const ItemList = ({ items }) => {
   const dispatch = useDispatch();

    const handleAddItem = (item) => {
      dispatch(addItem(item));
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="text-left m-2 p-2 border-b-2 border-black flex">
                    <div className="w-9/12">
                        <div>
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 m-2 relative">
                        <img src={IMG_URL + item.card.info.imageId} alt={item.card.info.name} className="w-full h-full object-cover" />
                        
                        {/* Button centered at the bottom of the image */}
                        <button
                            className="bg-black text-white px-1 rounded absolute bottom-0 left-1/3"
                            onClick={() => handleAddItem(item)}
                        >
                            Add+
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
