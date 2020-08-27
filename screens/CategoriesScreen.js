import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import colors from '../constants/colors'

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('CategoryMeals')} style={styles.gridItem}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem}/>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: colors.primary
    },
    headerTintColor: 'white'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen