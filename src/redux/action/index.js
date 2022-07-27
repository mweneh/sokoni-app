//add item to cart
function AddCart(item) {
    return{ 
        type:'ADDCART',
        payload: item
}
}
// remove item from cart
function RemoveCart(item) {
    return{ 
        type:'DELCART',
        payload: item
}
}