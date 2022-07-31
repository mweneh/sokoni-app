//add item to cart
export const addCart = (product) =>{
    return{ 
        type:'ADDITEM',
        payload:product
}
}

// remove item from cart
 export function removeCart(product) {
    return{ 
        type:'DELITEM',
        payload: product
}
}
