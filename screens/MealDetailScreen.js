import React from 'react'
import { View, Text, StyleSheet , Button, ScrollView, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

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
    const mealId = navData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title,
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