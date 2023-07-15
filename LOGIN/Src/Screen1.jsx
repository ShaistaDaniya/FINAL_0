import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width:223,
        hight:64,
    }
})
    const Screen1 = () =>{
        const navigation = useNavigation();
        const handlePress= () =>{
            navigation.navigate('Screen2');
        };
        return (
           <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
            <Image
          style={styles.logo}
          source={require('./GAT.jpeg')}
        />
            </TouchableOpacity>
           </View> 
        );
    };
export default Screen1;