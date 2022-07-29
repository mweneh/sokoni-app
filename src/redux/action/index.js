//add item to cart
export const addCart = (product) =>{
    return{ 
        type:'ADDCART',
        payload:product
}
}

// remove item from cart
 export function removeCart(product) {
    return{ 
        type:'DELCART',
        payload: product
}
}
