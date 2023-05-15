import React, { useContext, useReducer } from 'react'
import {
    
} 
from "../Components/action" 
import reducer from '../reducers/filter_reducer'
import { useProductsContext} from './products_context'

const initalState = {
    filtered_products:[],
    all_products:[]
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const [state, disptach] = useReducer(reducer, initalState);
    return(
        <FilterProvider value="filter context">
            {children}
        </FilterProvider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}