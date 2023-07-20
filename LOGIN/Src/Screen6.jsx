import React, { useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 223,
        height: 64,
        flex: 'none',
        order: 0,
        flexGrow: 0,
      },
      enter: {
        width: 'auto',
        height: 'auto',
        marginTop: 30,
        marginLeft: 100,
        marginRight: 100,
        fontSize: 16,
        lineHeight: 18,
      },
      prevnum: {
        width: 'auto',
        height: 'auto',
        // will be taken from previous page
        marginLeft: 105,
      },
      regview: {
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
        width: 212,
        marginLeft: 82,
        marginRight: 82,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      passcodeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
      },
      passcodeBox: {
        flex: 0,
        height: 56,
        width: 46,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 24,
        textAlign: 'center',
        paddingHorizontal: 0,
        marginHorizontal: 8,
        marginLeft: 1,
      },
      filledPasscodeBox: {
        borderColor: 'darkblue',
        borderWidth: 2,
      },
      filledPasscodeBoxError: {
        borderColor: 'red',
        borderWidth: 2,
      },
      resend: {
        fontSize: 16,
        marginLeft: 54,
        marginRight: 54,
        marginBottom: 298,
        width: 'auto',
        height: 'auto',
      },
      errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 8,
      },
});

const Screen6 = () => {
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const [passcodeError, setPasscodeError] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const passcodeInputs = useRef([]);
  const navigation = useNavigation();

  const handlePasscodeChange = (index, value) => {
    const updatedPasscode = [...passcode];
    updatedPasscode[index] = value;
    setPasscode(updatedPasscode);

    if (value && index < passcodeInputs.current.length - 1) {
      passcodeInputs.current[index + 1].focus();
    }
  };

  const handleVerifyPasscode = () => {
    const correctPasscode = '1234'; // we can Replace passcode
    if (passcode.join('') === correctPasscode) {
      console.log('Success: Passcode verified!');
      setPasscodeError(false);
      setWrongAttempts(0); // Reset wrong attempts on successful verification

      // Navigating to the last screen on correct passcode attempt
      navigation.navigate('LastScreen');
    } else {
      console.log('Error: Passcode verification failed!');
      setPasscodeError(true);
      setWrongAttempts((prevAttempts) => prevAttempts + 1);

      if (wrongAttempts === 1) {
        // Navigate to Screen 7 after two wrong attempts
        navigation.navigate('Screen7');
      }
    }
  };

  const handleSupportTextPress = () => {
    const supportURL = ''; // we can add your contact web page URL
    Linking.openURL(supportURL);
  };

  return (
    <View style={styles.regview}>
      <Text style={styles.enter}>Enter 4 digit code sent to</Text>
      <Text style={styles.prevnum}>Num</Text>

      <View style={styles.passcodeContainer}>
        {passcode.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (passcodeInputs.current[index] = ref)}
            secureTextEntry
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handlePasscodeChange(index, text)}
            style={[
              styles.passcodeBox,
              digit && styles.filledPasscodeBox,
              passcodeError && digit && styles.filledPasscodeBoxError,
            ]}
          />
        ))}
      </View>

      {passcodeError && <Text style={styles.errorText}>Incorrect passcode entered. Try Again!</Text>}

      <TouchableOpacity style={styles.button} onPress={handleVerifyPasscode}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.resend}>You can resend the passcode after 24 seconds</Text>
    </View>
  );
};

export default Screen6;
