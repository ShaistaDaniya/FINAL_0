import React from 'react';
// import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="screen1" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="screen1" component={Screen1} />
          <Stack.Screen name="screen2" component={Screen2} />
          <Stack.Screen name="screen3" component={Screen3} />

          
        </Stack.Navigator>
      </NavigationContainer>
   
  );
};

export default App;
