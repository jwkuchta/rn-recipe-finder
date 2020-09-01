import React, { useEffect } from 'react'
import { View, Text, StyleSheet , Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { useSelector } from 'react-redux'

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
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

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

            <View style={styles.screen}>
            {/* <Text>{selectedMeal.title}</Text> */}
            <Text>{selectedMeal.title}</Text>
            <Button title='Go back to Categories' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
        </ScrollView>
    )
}

// so we can put the recipe title in the header
MealDetailScreen.navigationOptions = (navData) => {
    // we can't use useSelector here
    const selectedMealTitle = props.navigation.getParam('mealTitle')

    return {
        headerTitle: selectedMealTitle,
        // HeaderButtons expects a props which is the component that should be used to render this item
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                    title='fav' 
                    iconName='star' 
                    onPress={() => console.log('mark as favorite')} 
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