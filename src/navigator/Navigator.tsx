import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawerContent } from '../components/DrawerContent';

import { HomeNavigator } from './HomeNavigator';

const Drawer = createDrawerNavigator();


export const Navigator = ( props: any) => {
  
  return (
      <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} />}>

          <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
           
      
      </Drawer.Navigator>
  );
}