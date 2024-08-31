import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style='auto' />
    </View>
  );
};

export default App;
