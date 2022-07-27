//add item to cart
function addCart(item) {
    return{ 
        type:'ADDCART',
        payload: item
}
}
// remove item from cart
function removeCart(item) {
    return{ 
        type:'DELCART',
        payload: item
}
}
export {addCart,removeCart}