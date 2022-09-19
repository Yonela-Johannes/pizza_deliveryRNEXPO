import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Entypo, Feather, AntDesign,Ionicons } from '@expo/vector-icons';
import { MainLayout } from '../screens/MainLayout';
import { Recipe } from '../screens/Recipe'
const Tab = createMaterialBottomTabNavigator()

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        activeColor="#42b883"
        barStyle={{ backgroundColor: 'tomato'}}
        >
              <Tab.Screen 
                  name='Home' 
                  component={MainLayout} 
                  options={{
                  tabBarLabel: false,
                  tabBarIcon: ({ color, focused }) => (
                    focused ? (<Ionicons name="home-sharp" size={26} color={color} />):
                    (
                      <Ionicons name="home-outline" color={color} size={26} />
                    )
                  ),
                  }}
                  />
              <Tab.Screen 
                  name='Search' 
                  component={MainLayout} 
                  options={{
                  tabBarLabel: false,
                  tabBarIcon: ({ color, focused }) => (
                    focused ? (<Ionicons name="search-circle" size={28} color={color} />):
                    (
                      <Feather name="search" color={color} size={26} />
                    )
                  ),
                  }}
                  />
              <Tab.Screen 
                  name='Bookmark' 
                  component={MainLayout} 
                  options={{
                  tabBarLabel: false,
                  tabBarIcon: ({ color, focused }) => (
                    focused ? (<Ionicons name="bookmark" size={26} color={color} />):
                    (
                      <Feather name="bookmark" color={color} size={26} />
                    )
                  ),
                  }}
                  />
              <Tab.Screen 
                  name='Settings' 
                  component={MainLayout} 
                  options={{
                  tabBarLabel: false,
                  tabBarIcon: ({ color, focused }) => (
                    focused ? (<Ionicons name="settings-sharp" size={26} color={color} />):
                    (
                      <AntDesign name="setting" color={color} size={26} />
                    )
                  ),
                  }}
                  />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs