import React from 'react'
import { View, Text, StyleSheet , Button} from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = props => {

    console.log('meal detail screen props', props)

    const mealId = props.navigation.getParam('mealId')
    console.log('mealId', mealId)
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    console.log('selected meal', selectedMeal)

    return (
        <View style={styles.screen}>
            {/* <Text>{selectedMeal.title}</Text> */}
            <Text>{selectedMeal.title}</Text>
            <Button title='Go back to Categories' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

// so we can put the recipe title in the header
MealDetailScreen.navigationOptions = (navData) => {
    const mealId = navData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MealDetailScreen