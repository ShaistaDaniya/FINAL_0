import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore } from 'redux';
import rootReducer from './Reducer';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const store = createStore(rootReducer);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="screen1" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="screen1" component={Screen1} />
          <Stack.Screen name="screen2" component={Screen2} />
          <Stack.Screen name="screen3" component={Screen3} />
          <Stack.Screen name="screen4" component={Screen4} />
          <Stack.Screen name="screen5" component={Screen5} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
