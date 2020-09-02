// meals reducers - filters and favorites

import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals'

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
        case SET_FILTERS:
            const appliedFilters = action.payload
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                return true
            })
            return {
                ...state, filteredMeals: filteredMeals
            }
        default:
            return state
    }
}

export default mealsReducer


