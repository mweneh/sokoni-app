import { Switch } from "react-router-dom"

const cart=[]

function cartHandler(state=cart,action) {
    const item = action.payload
    switch (action.type) {
        case 'ADDITEM':
            // already in cart?
            const exists = state.find(i =>i.id === item.id)
            if(exists){
                //increment quantity q
                return state.map(i =>
                    i.id === item.id ?{...i, q: i.q +1}: i)
            }
            else {
                const item = action.payload
                return [
                    ...state,
                    {
                        ...item,
                        q:1,
                    }
                ]
            }
            break;
    case 'DELITEM':
        const exists2 = state.find(n => n.id === item.id)
        if(exists2.q === 1) {
            return state.filter((n)=>n.id !== exists2.id)
        }
        else {
            return state.map((n)=>
        n.id === item.id ?{...n, q: n.q-1}: n
        )
    }
    break

        default:
            return state
            break;
    }
}
export default cartHandler