import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import colors from '../constants/colors'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs' // for android
import { Platform } from 'react-native'

// these are shared between the MealsNavigator and FavoritesNavigator
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
}

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
    defaultNavigationOptions: defaultStackNavOptions
})

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
})

const tabScreenConfig = {
    // what screens will be displayed when you click on a particular tab
    Meals: { 
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabinfo) => <AntDesign name='find' size={25} color={tabinfo.tintColor} />,
            tabBarColor: colors.primary // will have effect when shifting is set to true (on android only)
    }}, // we can use the MealsNavigator to be loaded when this tab is clicked!
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabinfo) => <AntDesign name='star' size={25} color={tabinfo.tintColor} />,
            tabBarColor: colors.accent
        }
    }
}

const MealsFavTabNavigator = 
Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true
})
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: colors.accent,
    }
})

// this wil be our main navigator as the drawer navigator is higher in the hierarchy
const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator

})

// MealsFavTabNavigator now became our root navigator so the below export needs to change
// export default createAppContainer(MealsNavigator)
export default createAppContainer(MainNavigator)

