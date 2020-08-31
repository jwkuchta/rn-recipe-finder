import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import colors from '../constants/colors'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'

// configure the initial order of screens (the main screens)
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
    }
})

const MealsFavTabNavigator = createBottomTabNavigator({
    // what screens will be displayed when you click on a particular tab
    Meals: { 
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabinfo) => <Ionicons name='ios-restaurant' size={25} color={tabinfo.tintColor} />
    }}, // we can use the MealsNavigator to be loaded when this tab is clicked!
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabinfo) => <Ionicons name='ios-star' size={25} color={tabinfo.tintColor} />
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: colors.accent,

    }
})

// MealsFavTabNavigator now became our root navigator so the below export needs to change
// export default createAppContainer(MealsNavigator)
export default createAppContainer(MealsFavTabNavigator)

