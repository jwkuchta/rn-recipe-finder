import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet , Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/meals'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId')
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)
    // const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
    const currentMealIsFavorite = favoriteMeals.includes(selectedMeal)
    console.log(currentMealIsFavorite)
    

    const dispatch = useDispatch()

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavHandler})
    }, [toggleFavHandler])

    useEffect(() => {
      props.navigation.setParams({isFav: currentMealIsFavorite})
    }, [currentMealIsFavorite])

    // we could do this but our param would not be passed til after the component is loaded 
    // and the headerTitle would be delayed. It is better to forward it from MealList so it is available earlier
    // useEffect(() => {
    //     props.navigation.setParams({mealTitle: selectedMeal.title})
    // }, [selectedMeal])

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>

            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} min</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingr => <ListItem key={ingr}>{ingr}</ListItem>)}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

// so we can put the recipe title in the header
MealDetailScreen.navigationOptions = (navData) => {
    // we can't use useSelector here
    const selectedMealTitle = navData.navigation.getParam('mealTitle')
    const toggleFav = navData.navigation.getParam('toggleFav')
    const isFav = navData.navigation.getParam('isFav')

    return {
        headerTitle: selectedMealTitle,
        // HeaderButtons expects a props which is the component that should be used to render this item
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                    title='fav' 
                    // iconName='star' 
                    iconName={isFav ? 'star' : 'skype'}
                    onPress={toggleFav} 
                    />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22, 
        textAlign: "center"
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        color: 'black'
    }
})

export default MealDetailScreen

