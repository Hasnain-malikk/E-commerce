import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[index] =0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] = useState(getDefaultCart())
    const ContextValue = {all_products,cartItems};
    console.log(cartItems)
    return <ShopContext.Provider value={ContextValue}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;