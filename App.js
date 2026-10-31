import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ApresentacaoScreen from './src/screens/Apresentacao';
import LoginScreen from './src/screens/Login';
import CadastroScreen from './src/screens/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Apresentacao"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Apresentacao" component={ApresentacaoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
