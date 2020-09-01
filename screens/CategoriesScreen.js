import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({ 
                    routeName: 'CategoryMeals', 
                    params: { 
                        categoryId: itemData.item.id
                    }
                })
            }} 
            />
        )
    }

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem}/>
    )
}

CategoriesScreen.navigationOptions = (navData) => { // we need the navData to toggle the drawer
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                    title='Menu' 
                    iconName='bars' 
                    onPress={() => navData.navigation.toggleDrawer()}
                    />
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

export default CategoriesScreen