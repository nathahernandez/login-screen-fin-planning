import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
            <Routes />
            <StatusBar backgroundColor='#38A69D'style='light' />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}