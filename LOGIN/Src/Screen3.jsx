import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoneNumber } from './Action';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  register: {
    width: 227,
    height: 28,
    marginTop: 60,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 28,
  },
  regview: {
    fontSize: 16,
  },
  numContainer: {
    height: 56,
    borderColor: '#2F4D8B',
    borderWidth: 1,
    borderRadius: 5,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  flagIcon: {
    marginRight: 10,
  },
  num: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    marginTop: 23,
    backgroundColor: 'lightgray',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 42,
    margin: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    padding: 12,
    fontSize: 16,
    lineHeight: 19.92,
  },
  Need: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    marginTop: 30,
  },
  supportText: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    color: '#2F4D8B',
    textDecorationLine: 'underline',
  },
});

const Screen3 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber: initialPhoneNumber } = route.params;
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState(initialPhoneNumber);

  const handlePhoneNumberChange = (text) => {
    const formattedNumber = text.replace(/[^0-9]/g, '');
    setFormattedPhoneNumber(formattedNumber);
  };

  const handleSupportTextPress = () => {
    const supportURL = ''; // if required, replace with your contact web page URL
    Linking.openURL(supportURL);
  };

  const handleNextButtonPress = () => {
    dispatch(setPhoneNumber(formattedPhoneNumber)); // Dispatching the action to update the phone number in the store
    navigation.navigate('Screen4');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./GAT.jpeg')} />
      <PhoneNumberInput
        phoneNumber={formattedPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
        handleSupportTextPress={handleSupportTextPress}
        handleNextButtonPress={handleNextButtonPress}
      />
    </View>
  );
};

const PhoneNumberInput = ({
  phoneNumber,
  handlePhoneNumberChange,
  handleSupportTextPress,
  handleNextButtonPress,
}) => {
  return (
    <View style={styles.regview}>
      <Text style={styles.register}>Your Registered Phone Number:</Text>
      <View style={styles.numContainer}>
        {/* Flag Component */}
        {/* Add the Flag component code here */}
        <TextInput
          style={styles.phoneNumberInput}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          maxLength={10}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextButtonPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        By proceeding, you consent to get SMS messages including by automated means, from Gig and Take and its affiliates to the phone number provided
      </Text>
      <Text style={styles.Need}>Need help?</Text>
      <Text style={styles.supportText} onPress={handleSupportTextPress}>
        Contact for support
      </Text>
    </View>
  );
};

export default Screen3;
