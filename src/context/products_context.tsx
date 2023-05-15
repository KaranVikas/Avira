import axios from 'axios'
import React, {useContext, useReducer, useEffect} from 'react'
import reducer from '../reducers/products_reducer'
import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT_SUCCESS
} 
from "../Components/action" 

const initialState = {
    isSidebarOpen:false,
    products_loading: false,
    products_error:false,
    products:[],
    featured_products: [],
    single_product_loading:false,
    single_product_error:false,
    single_product:{}

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
        const products = response.data
        dispatch({type:GET_PRODUCTS_SUCCESS, payload: products})
        } catch(error) {
        dispatch({type:GET_PRODUCTS_ERROR})
        }
    }

    const fetchSingleProduct = async(url) => {
        dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
        try {
            const response = await axios.get(url)
            const singleProduct = response.data;
            console.log("single Response", response)
            dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
        } catch (error) {
            dispatch({type:GET_SINGLE_PRODUCT_ERROR})
        }
    }

    useEffect(()=>{
        fetchProducts(url)
        openSidebar()
    },[])
    return(
        <ProductContext.Provider value={{...state, openSidebar, fetchSingleProduct}}>
            {children }
        </ProductContext.Provider>
    )
}

//make sure use

export const useProductsContext = () => {
    return useContext(ProductContext)
}

