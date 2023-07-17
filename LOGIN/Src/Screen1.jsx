import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigateToScreen2 } from './Action';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
  },
});

const Screen1 = () => {
  const dispatch = useDispatch();
  const navigation = useSelector(state => state.navigation); 
  const handlePress = () => {
    dispatch(navigateToScreen2());
    navigation.navigate('Screen2'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.logo} source={require('./GAT.jpeg')} />
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;
