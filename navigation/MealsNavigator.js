import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'


// configure the initial order of screens (the main screens)
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    // alternatively, to add more configuration, you can do this:
    // CategoryMeals: {
    //     screen: CategoryMealsScreen
    // }
    MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator)