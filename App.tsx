import { SafeAreaView, StatusBar, View } from 'react-native';
import Balance from './App/src/components/others/Balance';
import UserBar from './App/src/components/bar/UserBar';
import KeyBoard from './App/src/components/others/KeyBoard';

function App(): JSX.Element {
  return (
    <SafeAreaView className="flex-1 p-1">
      <StatusBar backgroundColor={"#000"} />
      <KeyBoard />
    </SafeAreaView>
  )
}

export default App;
