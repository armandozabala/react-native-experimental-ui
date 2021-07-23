import React from 'react'
import { Button, Text, View } from 'react-native'
import { useInfo } from '../hooks/useInfo';

export const HomeScreen = ({ navigation }: any) => {

    const { categorias } = useInfo();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            
            <Button
                title="Go"
                onPress={() => navigation.navigate('DetailScreen')}
            >
            </Button>
            {
                categorias.map((cat:any) => (
                    <Text>{ cat.nombre }</Text>
                ))
            }
        </View>
    )
}

