import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>CATEGORY MEAN SCREEN</Text>
            <Button 
            title='MEAL DETAILS' 
            onPress={() => props.navigation.navigate('MealDetail')} 
            />
            <Button title='GO BACK' onPress={() => {
                props.navigation.goBack()
                // props.navigation.pop()
            }} />
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

export default CategoryMealScreen