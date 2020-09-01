import React, { useState, useEffect, useCallback } from 'react'
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

const FiltersScreen = ({ navigation }) => {

    const [ isGF, setIsGF ] = useState(false)
    const [ isLacFree, setIsLacFree ] = useState(false)
    const [ isVegan, setIsVegan ] = useState(false)
    const [ isVegetarian, setIsVegetarian ] = useState(false)

    // to make sure saveFilters only updates when our state changes, we are using useCallback.
    // useCallback wraps the function and makes the saveFilters function cached by React and only recreated 
    // when its dependencies change (kind of like useEffect) there are changes (array on line 40)
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGF,
            lactoseFree: isLacFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters)
    }, [isGF, isLacFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filter By: </Text>
            <FilterSwitch label='Gluten-Free' value={isGF} onChange={() => setIsGF(!isGF)}/>
            <FilterSwitch label='Lactose-Free' value={isLacFree} onChange={() => setIsLacFree(!isLacFree)}/>
            <FilterSwitch label='Vegan' value={isVegan} onChange={() => setIsVegan(!isVegan)}/>
            <FilterSwitch label='Vegetarian' value={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)}/>
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title='Save'
                iconName='save'
                // this needs to be executed immediately, like so:
                onPress={() => navData.navigation.getParam('save')()}
                // or bound to the onPress and executed when it is triggered by the event:
                // onPress={navData.navigation.getParam('save')}
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

// getParams() causes the component to rebuild because its props (navigation) change