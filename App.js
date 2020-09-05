import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import Contants from 'expo-constants';
import { Image } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
    // screenOptions={
    //   {
    //     title: 'Business Search'
    //   }
    // }
    >
      <Stack.Screen
        options={
          {
            title: 'Home'
          }
        }
        name="SearchScreen"
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          // headerTintColor: '#fff',
          title: '',
          // headerBackground: () => (
          //   <Image
          //     style={{ height: 200, marginBottom: 50}}
          //     source={{uri:
          //         'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          //     }}
          //   />
          // ),
        }}
        name="ResultsShow"
        component={ResultsShowScreen}
      />
    </Stack.Navigator>
  );
};


export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
