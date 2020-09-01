// meals reducers - filters and favorites

import { MEALS } from '../../data/dummy-data'

const initState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favorites: MEALS
}

const mealsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'something':
            return action.payload
        default:
            return state
    }
}

export default mealsReducer