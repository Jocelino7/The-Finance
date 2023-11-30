import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import localStrings from '../../../../utils/localization';
import DashBoard from '../dashBoard/DashBoard';
import Report from '../report/Report';
import Accounts from '../account/Account';
import Profile from '../profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colorScheme } from '../../../../utils/color';
import Transaction from '../transaction/Transaction';
import Category from '../category/category';
function TabBar() {
    const Tab = createBottomTabNavigator();
    const { home, report, categories, account } = localStrings.screens
    return (
        <NavigationContainer  independent={true}>
            <Tab.Navigator screenOptions={
                {
                    headerShown: false,
                    tabBarActiveTintColor: colorScheme.main,
                    tabBarStyle:{
                        padding:5,
                        height:60,
                        backgroundColor:colorScheme.bg
                    }
                }
            }>
                <Tab.Screen name={home} component={DashBoard} options={
                    {
                        tabBarIcon: ({ focused, color, size }) => <Icon name="grid-view" color={color} size={size} />
                    }
                } />
                <Tab.Screen name={report} component={Report} options={
                    {
                        tabBarIcon: ({ color, size }) => <Icon name="show-chart" size={size} color={color} />
                    }
                } />
                 <Tab.Screen name="add" component={Transaction} options={
                    {
                        tabBarLabel:"",
                        tabBarIcon: ({ color, size }) => <Icon name="add-circle" color={color} size={42} />,
                        
                    }
                } />
                <Tab.Screen name={account} component={Accounts} options={
                    {
                        tabBarIcon: ({ color, size }) => <Icon name="credit-card" color={color} size={size} />
                    }
                } />
                <Tab.Screen name={categories} component={Category} options={
                    {
                        tabBarIcon: ({ color, size }) => <Icon name="category" color={color} size={size} />,

                    }
                } />
            </Tab.Navigator>

        </NavigationContainer>

    );
}

export default TabBar;


