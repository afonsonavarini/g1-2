import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Previsao from './src/pages/Previsao';
import Sobre from './src/pages/Sobre';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#296d98',
          },
          headerTintColor: '#fff'
        }}
      >

        <Stack.Screen name="Home" component={Home} options={{ title: 'Menu' }}></Stack.Screen>
        <Stack.Screen name="Previsao" component={Previsao} options={{ title: 'Previsão do tempo' }}></Stack.Screen>
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
