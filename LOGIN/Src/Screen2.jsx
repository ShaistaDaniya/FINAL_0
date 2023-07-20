import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Flag } from 'react-native-svg-flagkit';

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
  phoneNumberInput: {
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

const Screen2 = () => {
  const navigation = useNavigation();

  const handlePhoneNumberInputClick = () => {
    navigation.navigate('Screen3');
  };

  const handleNextButton = () => {
    navigation.navigate('Screen3');
  };

  const handleSupportTextPress = () => {
    const supportURL = ''; // Need to Replace with contact web page URL
    Linking.openURL(supportURL);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./GAT.jpeg')} />
      <PhoneNumberInput
        handlePhoneNumberInputClick={handlePhoneNumberInputClick}
        handleNextButton={handleNextButton}
        handleSupportTextPress={handleSupportTextPress}
      />
    </View>
  );
};

const PhoneNumberInput = ({
  handlePhoneNumberInputClick,
  handleNextButton,
  handleSupportTextPress,
}) => {
  return (
    <View style={styles.regview}>
      <Text style={styles.register}>Your Registered Phone Number:</Text>
      <TouchableOpacity onPress={handlePhoneNumberInputClick}>
        <View style={styles.numContainer}>
          {/* Flag Component */}
         {/* <Flag id="IN" width={24} height={24} style={styles.flagIcon} /> */}
          <Text style={styles.phoneNumberInput}>Click here to enter phone number</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNextButton}>
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

export default Screen2;
