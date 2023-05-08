
import React, {useContext, useReducer, useEffect} from 'react'
import reducer from '../reducers/products_reducer'

const initialState = {
    isSidebarOpen:false
}

const ProductContext = React.createContext();

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)

    const openSidebar = () => {
        dispatch({type: 'SIDEBAR_OPEN'})
    }

    useEffect(()=>{
        openSidebar()
    },[])
    return(
        <ProductContext.Provider value={{...state, openSidebar}}>
            {children }
        </ProductContext.Provider>
    )
}

//make sure use

export const useProductsContext = () => {
    return useContext(ProductContext)
}

