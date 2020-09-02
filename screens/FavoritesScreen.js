import React from 'react'
import MealList from '../components/MealList'
// import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux'
import DefaultText from '../components/DefaultText'
import { View, Text, StyleSheet } from 'react-native'

const FavoritesScreen = props => {
    // we are here faking the data for favorite meals

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorites yet</DefaultText>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})