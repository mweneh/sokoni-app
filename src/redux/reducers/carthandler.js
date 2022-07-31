import { Switch } from "react-router-dom"

const additem=[]

function cartHandler(state=additem,action) {
    const product = action.payload
    switch (action.type) {
        case 'ADDITEM': return [
            ...state,
            product
        ]
        break;
        case 'DELITEM': 
        return state = state.filter(x => {
           return x.id !== product.id
        })
        break;
        default: return state
    }}
// const cart=[]

// function cartHandler(state=cart,action) {
//     const product = action.payload
//     switch (action.type) {
//         case 'ADDITEM':
//             // already in cart?
//             const exists = state.find(i =>i.id === product.id)
//             if(exists){
//                 //increment quantity qty
//                 return state.map(i =>
//                     i.id === product.id ?{...i, qty: i.qty +1}: i)
//             }
//             else {
//                 const product = action.payload
//                 return [
//                     ...state,
//                     {
//                         ...product,
//                         qty:1,
//                     }
//                 ]
//             }
//             break;
//     case 'DELITEM':
//         const exists2 = state.find(n => n.id === product.id)
//         if(exists2.qty === 1) {
//             return state.filter((n)=>n.id !== exists2.id)
//         }
//         else {
//             return state.map((n)=>
//         n.id === product.id ?{...n, qty: n.qty-1}: n
//         )
//     }
//     break

//         default:
//             return state
//             break;
//     }
// }
export default cartHandler