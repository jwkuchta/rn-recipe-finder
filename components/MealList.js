// MealList is now its own component as it will be used by Meals by category and in the Favorites screen as well
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import { useSelector } from 'react-redux'

const MealList = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)
    const renderMealItem = itemData => {

        const isFavorite = favMeals.some(meal => meal.id === itemData.item.id)

        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
    
                onSelectMeal={() => {
                    // we can forward mealId to the MealDetail via params
                    props.navigation.navigate({
                        routeName: 'MealDetail', 
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavorite
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            {/* we don't need to extract the key because modern RN looks for 'id' */}
            <FlatList 
                data={props.listData} 
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}} 
                />
        </View>
    )
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

export default MealList

