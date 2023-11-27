import { SafeAreaView, StatusBar } from 'react-native';
import CostumeTextField from './App/src/components/TextField.tsx/CostumeTextField';
import Login from './App/src/screens/auth/login/login';

function App(): JSX.Element {
  return (
    <SafeAreaView className="flex-1 p-1">
      <StatusBar backgroundColor={"#000"} />
     <Login/>
    </SafeAreaView>
  )
}

export default App;
