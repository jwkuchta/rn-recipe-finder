import React from 'react'
import { View, Text, StyleSheet , Button} from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

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
        headerTitle: selectedMeal.title,
        // HeaderButtons expects a props which is the component that should be used to render this item
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='fav' iconName='star' onPress={() => console.log('mark as favorite')} />
                </HeaderButtons>
            )
        }
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