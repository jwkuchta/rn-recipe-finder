// meals reducers - filters and favorites

import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals'

const initState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.payload)
            if (existingIndex >= 0) {
                const updatedFavMeals = state.favoriteMeals.filter(meal => meal.id !== action.payload)
                // his way:
                // const updatedFavMeals = [...state.favoriteMeals]
                // updatedFavMeals.splice(existingIndex, 1)
                return {
                    ...state, favoriteMeals: updatedFavMeals
                }
            } else {
                const newFavMeal = state.meals.find(meal => meal.id === action.payload)
                return {
                    ...state, favoriteMeals: state.favoriteMeals.concat(newFavMeal)
                }
            }
        default:
            return state
    }
}

export default mealsReducer


