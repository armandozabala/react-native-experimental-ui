import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Text, View, StyleSheet } from 'react-native';

import { Avatar, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

export const DrawerContent = ( props : any) => {
    
    const { logOut } = useContext(AuthContext)
    
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{}}
                                size={50}
                            />
                            <View>
                              <Text>User</Text>
                            </View>
                         </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Home"
                            onPress={()=>{}}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Home"
                            onPress={()=>{ props.navigation.navigate('HomeScreen')  }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section >
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="log-out-outline"
                            size={30}
                        />
                    )}
                    label="Sign Out"
                    onPress={logOut}
                />
            </Drawer.Section>
       </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerSection: {
        marginTop: 15
    }
})
