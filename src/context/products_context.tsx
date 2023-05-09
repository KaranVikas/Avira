import axios from 'axios'
import React, {useContext, useReducer, useEffect} from 'react'
import reducer from '../reducers/products_reducer'
import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR    
} 
from "../Components/action" 

const initialState = {
    isSidebarOpen:false,
    products_loading: false,
    products_error:false,
    products:[],
    featured_products: []
}

const ProductContext = React.createContext();

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)

    const openSidebar = () => {
        dispatch({type: 'SIDEBAR_OPEN'})
    }
    const url = 'http://localhost:1337/api/products?populate=*'
    const fetchProducts = async(url) => {
        dispatch({type:'GET_PRODUCTS_BEGIN'})
        try{
        const response = await axios.get(url)
        console.log("response", response)
        const products = response.data
        dispatch({type:GET_PRODUCTS_SUCCESS, payload: products})
        } catch(error) {
        dispatch({type:GET_PRODUCTS_ERROR})
        }
    }

    useEffect(()=>{
        fetchProducts(url)
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

