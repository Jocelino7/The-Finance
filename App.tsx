import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import { colorScheme } from './utils/color';

import Stack from './App/src/screens/stack/Stack';


function App(): JSX.Element {
  
  return (

      <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme.bg }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <StatusBar backgroundColor="#000" />
          {//<Stack />
          }
        </KeyboardAvoidingView>
      </SafeAreaView>

  )
}

export default App;
