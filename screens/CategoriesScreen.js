import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoriesScreen = props => {

    console.log(props)

    return (
        <View style={styles.screen}>
            <Text>CATEGORIES SCREEN</Text>
            <Button 
            title="GO TO MEALS" onPress={() => {
            // props.navigation.navigate({routeName: 'CategoryMeals'})
            props.navigation.navigate('CategoryMeals')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesScreen