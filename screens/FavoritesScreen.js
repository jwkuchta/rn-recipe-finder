import React from 'react'
import MealList from '../components/MealList'
// import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux'

const FavoritesScreen = props => {
    // we are here faking the data for favorite meals

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favs',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                    title="Menu"
                    iconName="bars"
                    onPress={() => navData.navigation.toggleDrawer()}
                    />
                </HeaderButtons>
            )
        }
    }   
}

export default FavoritesScreen