import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import { colorScheme } from './utils/color';
import { useState } from 'react';
import Stack from './App/src/screens/stack/Stack';

function App(): JSX.Element {
  const [currentColor, setCurrentColor] = useState("#000")
  return (
    
      <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme.bg }}>
        <KeyboardAvoidingView style={{flex:1}}>
        <StatusBar backgroundColor={currentColor} />
        <Stack />

        </KeyboardAvoidingView>
        
      </SafeAreaView>
   
  )
}

export default App;
