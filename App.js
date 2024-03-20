// MainApp.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar.js';
import Home from './screens/HomeScreen.js';
import Settings from './screens/Settings.js';
import { ThemeContext } from './context/ThemeContext.js';
import ThemeProvider from './context/ThemeProvider.js';

const Stack = createNativeStackNavigator();

export default function MainApp() {
  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
