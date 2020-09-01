import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'

import { useSelector } from 'react-redux' // to get MEALS from store instead of the file

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId')
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}

// this time it's a function and not an object because it will change dynamically
CategoryMealScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCat = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCat.title
        // extracted to default settings in MealsNavigator
    }
}

export default CategoryMealScreen

