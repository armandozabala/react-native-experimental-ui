import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigator/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({children}: any) => {
   return(
     <AuthProvider>
        { children }
     </AuthProvider>
   )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState> 
        <RootNavigator />
        </AppState>
    </NavigationContainer>
  )
}

export default App
