import { createStackNavigator } from '@react-navigation/stack';
import localStrings from '../../../../utils/localization';
import TabBar from '../tabBar/TabBar';
import CreateGoal from '../goal/CreateGoal';
import Goals from '../goal/Goals';
import Setting from '../setting/Setting';
import { NavigationContainer } from '@react-navigation/native';
function Stack() {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerShown:false
                }
            }>
                <Stack.Screen name={localStrings.screens.tab} component={TabBar} />
                <Stack.Screen name={localStrings.createGoal} component={CreateGoal} />
                <Stack.Screen name={localStrings.goals} component={Goals} />
                <Stack.Screen name={localStrings.screens.settings} component={Setting} />
            </Stack.Navigator>

        </NavigationContainer>

    );
}

export default Stack;