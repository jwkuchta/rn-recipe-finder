import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
// you need to manually manage state for the Switch
import colors from '../constants/colors'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
            value={props.value}
            // onValueChange={() => setIsGF(!isGF)} //my way
            trackColor={{true: colors.accent}}
            // thumbColor={colors.primary}
            onValueChange={props.onChange} // his way
            />
        </View>
    )
}

const FiltersScreen = props => {

    const [ isGF, setIsGF ] = useState(false)
    const [ isLacFree, setIsLacFree ] = useState(false)
    const [ isVegan, setIsVegan ] = useState(false)
    const [ isVegetarian, setIsVegetarian ] = useState(false)

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filter By: </Text>
            <FilterSwitch label='Gluten-Free' value={isGF} onChange={(isGF) => setIsGF(isGF)}/>
            <FilterSwitch label='Lactose-Free' value={isLacFree} onChange={(isLacFree) => setIsLacFree(isLacFree)}/>
            <FilterSwitch label='Vegan' value={isVegan} onChange={(isVegan) => setIsVegan(isVegan)}/>
            <FilterSwitch label='Vegetarian' value={isVegetarian} onChange={(isVegetarian) => setIsVegetarian(isVegetarian)}/>
        </View>
        
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => (
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }, 
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
})

export default FiltersScreen