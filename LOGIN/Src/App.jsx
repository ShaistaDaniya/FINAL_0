import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
// import Screen2 from './Screen2';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="screen1" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="screen1" component={Screen1} />
          
        </Stack.Navigator>
      </NavigationContainer>
   
  );
};

export default App;
