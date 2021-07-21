import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native';
import { RootStack } from './src/navigators/rootStack';
import { NavigationContainer } from '@react-navigation/native';

const getFonts = () => Font.loadAsync({
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  'lato-extraBold': require('./assets/fonts/Lato-ExtraBold.ttf'),
  'icomoon': require('./assets/fonts/icomoon.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
      </SafeAreaView>
    )
  } else {
    return <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
  }
}
