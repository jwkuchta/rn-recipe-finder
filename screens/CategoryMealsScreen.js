import React from 'react'
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId')
    const selectedCat = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    const onSelectItem = () => {}

    const renderMealItem = itemData => {
        return (
            <View>
                <MealItem 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                title={itemData.item.title}
                onSelectMeal={() => {}}
                item={itemData.item}
                image={itemData.item.imageUrl}
                />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            {/* we don't need to extract the key because modern RN looks for 'id' */}
            <FlatList 
            data={displayedMeals} 
            renderItem={renderMealItem}
            style={{width: '100%'}} 
            />
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
        justifyContent: 'center',
        padding: 20,
        margin: 20
    }
})

export default CategoryMealScreen

