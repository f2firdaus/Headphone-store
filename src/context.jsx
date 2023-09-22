import { createContext, useEffect, useState } from "react";
export const Context = createContext();
const AppContext = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    // const [favCount, setFavcount] = useState(0);
    const [favourite,setFavourite] =useState(true)
    const [favItems, setFavItems] = useState([]);
    const handleAddItem = (product,quantity) => {
        let items = [...cartItem];
        let index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            items[index].quantity += quantity;
        } else {
            product.quantity = quantity;
            items =[...items,product]
        }
        setCartItem(items);
    }
    const handleFavItems = (productId) => {
        if (favItems.includes(productId)) {
            setFavItems(favItems.filter((id) => id !== productId));
            alert("removed from fav")
        } else {
            setFavItems([...favItems, productId])
            alert("added to fav")
        }
        
        
    }
    useEffect(() => {
        let totalAmount = 0;
        cartItem.map((item) => totalAmount += item.price * item.quantity);
        setTotalPrice(totalAmount);
        let totalQuantity = 0;
        cartItem.map((item) => totalQuantity += item.quantity);
        setCartCount(totalQuantity)
    })
    const handleRemoveCart = (product) => {
        let items = cartItem.filter((p) => p.id !== product.id);
        setCartItem(items);
    }
    const handleQuntityCount = (type,product) => {
        const items = [...cartItem];
        const index = items.findIndex((p) => p.id === product.id)
        if (type === "inc") {
            items[index].quantity +=1
        } else if (type === "dec") {
            if (items[index].quantity === 1) return;
            items[index].quantity -=1
        }
        setCartItem(items)
    }
    return (
        <Context.Provider value={{
            cartItem,
            setCartItem,
            handleAddItem,
            cartCount,
            setCartCount,
            totalPrice,
            setTotalPrice,
            handleRemoveCart,
            handleQuntityCount,
            favourite,
           setFavourite,
            favItems,
            setFavItems,
            handleFavItems
        }}>
            {children}
        </Context.Provider>
    )
    
}
export default AppContext;