const cart = []


const handleCart = (state = cart, action) =>{
    const product = action.payload
    switch (action.type) {
        case 'ADDITEM':
            //Verificar si ya existente
            const exist = state.find((x)=> x.id === product.id)
            if(exist) {
                //aumenta la cantidad
                return state.map((x)=> 
                x.id === product.id ? {...x, quantity: x.quantity + 1} : x)
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    }
                ]
            }
            

            case 'DELITEM':
                const exist1 = state.find((x)=> x.id === product.id)
                if(exist1.quantity === 1){
                    return state.filter((x)=> x.id !== exist1.id)
                }else{
                    return state.map((x)=>
                    x.id === product.id ? {...x, quantity: x.quantity - 1} : x
                    )
                }
                
            
            case 'CLEARCART':
                return state = []

            default:
                return state;
                
    }
}

export default handleCart