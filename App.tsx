import { SafeAreaView, StatusBar } from 'react-native';
import { colorScheme } from './utils/color';
import { useState } from 'react';
import TabBar from './App/src/screens/tabBar/TabBar';
import Stack from './App/src/screens/stack/Stack';

function App(): JSX.Element {
  const [currentColor, setCurrentColor] = useState("#000")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme.bg }}>
      <StatusBar backgroundColor={currentColor} />
      <Stack/>
    </SafeAreaView>
  )
}

export default App;
