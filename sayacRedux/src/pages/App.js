import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPages from './Main/main';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

export const Stack = createNativeStackNavigator();
function App() {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainPages} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;