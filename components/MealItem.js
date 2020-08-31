import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {

    return (
        <View style={styles.mealItem}>
            {/* it needs to be touchable so we can click on recipe and go to details */}
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        {/* we need to wrap the title in the image so it displays */}
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration} min</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>   
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200, 
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden' // so no child can go beyond the border radius
    },
    mealHeader: {
        height: '85%', // it will hold the image
    },
    mealDetail: {
       paddingHorizontal: 1,
       justifyContent: 'space-between',
       alignItems: 'center',
       height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end' //to move the title to the bottom
    },
    title: {
        fontFamily: 'open-sans-bold', 
        fontSize: 19,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }
})

export default MealItem