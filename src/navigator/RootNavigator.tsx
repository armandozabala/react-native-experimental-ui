import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { DetailScreen } from '../screen/DetailScreen';
import { HomeScreen } from '../screen/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import { HomeNavigator } from './HomeNavigator';
import { Navigator } from './Navigator';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screen/LoadingScreen';

const Stack = createStackNavigator();

export const RootNavigator = ({ navigation }: any) => {
    
    const { status } = useContext(AuthContext)   
    if (status === 'checking') return <LoadingScreen />
    
    return (
        <Stack.Navigator headerMode='none'>
            {
                (status !== 'authenticated') ? (
                    <>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    </>
                ) : (
                    <Stack.Screen name="Navigator" component={Navigator} />
                )
            }
    </Stack.Navigator>
  );
}