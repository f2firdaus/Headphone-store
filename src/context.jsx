import { createContext, useEffect, useState } from "react";
export const Context = createContext();
const AppContext = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] =useState(0)
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
            handleQuntityCount
        }}>
            {children}
        </Context.Provider>
    )
    
}
export default AppContext;