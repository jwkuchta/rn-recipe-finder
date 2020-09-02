export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SET_FILTERS = 'SET_FILTERS'

export const toggleFavorite = (mealId) => {
    return {
        type: TOGGLE_FAVORITE, payload: mealId
    }
}

export const setFilters = filter => {
    return {
        type: SET_FILTERS, payload: filter
    }
}
