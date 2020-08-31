import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    )
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

