import React from 'react'
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId')
    const selectedCat = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            {/* we don't need to extract the key because modern RN looks for 'id' */}
            <FlatList data={displayedMeals} renderItem={renderMealItem} />
        </View>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryMealScreen

