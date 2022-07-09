import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main/Main';
import Second from './Second/Second';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

export const Stack = createNativeStackNavigator();
function App() {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPages" component={Main} />
          <Stack.Screen name="SecondPages" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;