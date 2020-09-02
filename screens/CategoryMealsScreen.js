import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText'
import { View, StyleSheet } from 'react-native'

import { useSelector } from 'react-redux' // to get MEALS from store instead of the file

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId')
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    
    if (displayedMeals.length === 0) {
        return (
            <View style={style.content}>
                <DefaultText>No filtered meals in this category</DefaultText>
            </View>
        )
    }
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

const style = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen

