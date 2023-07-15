import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import FlagIndia from 'react-native-emoji-flag-kit/FlagIndia';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
    order: 0,
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
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
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

  const handleTap = () => {
    console.log('Tapped');
  };

  const handleNextButton = async (phoneNumber) => {
    if (phoneNumber.length === 10) {
      await sendPhoneNumberToServer(phoneNumber);
      navigation.navigate('Screen4', { phoneNumber });
    }
  };

  const sendPhoneNumberToServer = async (phoneNumber) => {
    const url = 'https://localhost:7201/api/NumberStore'; // this is my url

    const payload = {
      id: new Date().getTime(), // this will Generate a unique timestamp for 'id'
      phoneNumber: phoneNumber,
    };

    try {
      const response = await axios.post(url, payload);

      if (response.status === 200) {
        console.log('Phone number successfully sent to the server');
      } else {
        console.log('Failed to send phone number to the server');
      }
    } catch (error) {
      console.error('Error occurred while sending the phone number:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleTap}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./GAT.jpeg')} />
        <PhoneNumberInput onNextButton={handleNextButton} />
      </View>
    </TouchableOpacity>
  );
};

const PhoneNumberInput = ({ onNextButton }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsButtonActive(phoneNumber.length === 10);
  }, [phoneNumber]);

  const handlePhoneNumberChange = (text) => {
    const formattedNumber = text.replace(/[^0-9]/g, '');
    setPhoneNumber(formattedNumber);
  };

  const handleNextButton = () => {
    console.log('Next button clicked');
    onNextButton(phoneNumber);
  };

  const handleSupportTextPress = () => {
    const supportURL = ''; //if required need to replace with your contact web page URL
    Linking.openURL(supportURL);
  };

  return (
    <View style={styles.regview}>
      <Text style={styles.register}>Your Registered Phone Number:</Text>
      <View style={styles.numContainer}>
        <FlagIndia size={24} style={styles.flagIcon} />
        <TextInput
          style={styles.num}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          maxLength={10}
        />
      </View>
      <TouchableOpacity
        style={isButtonActive ? styles.activeButton : styles.button}
        onPress={handleNextButton}
        disabled={!isButtonActive}
      >
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
