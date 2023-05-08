const products_reducer = (state,action) => {
    if(action.type === 'SIDEBAR_OPEN'){
        console.log(action)
        return {...state, isSidebarOpen : true }
    }

    return state
    throw new Error (`No Matching "${action.type}"  - action type`)
}

export default products_reducer