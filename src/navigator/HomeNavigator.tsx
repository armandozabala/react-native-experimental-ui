import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DetailScreen } from '../screen/DetailScreen';
import { HomeScreen } from '../screen/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigator } from './Navigator';

const Stack = createStackNavigator();

export const HomeNavigator = ({navigation}: any) => {
  return (
      <Stack.Navigator
          screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {
              backgroundColor: '#009387'
          },
          headerTitleStyle: {
              fontWeight: 'bold'
          }
          
      }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}
              options = {{
                  headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25}
                          backgroundColor="#009387"
                          onPress={()=> navigation.openDrawer()}
                  >
                  </Icon.Button> 
                )
             }}
          />

          <Stack.Screen name="DetailScreen" component={DetailScreen}    />
          
        
    </Stack.Navigator>
  );
}