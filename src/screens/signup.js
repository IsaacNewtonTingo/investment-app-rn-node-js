import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import styles from '../components/globalStyles';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/button';

const A = props => <Text style={styles.textLink}>{props.children}</Text>;

export default function SignUp({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNUmber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <ScrollView bounces={true} style={styles.container}>
      <Image
        style={styles.leadIMG}
        source={require('../assets/images/sitCash.png')}
      />
      <View style={styles.textInputContainer}>
        <Ionicons
          style={styles.textInputIcon}
          name="person"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First name (e.g Jane)"
        />
      </View>

      <View style={styles.textInputContainer}>
        <Ionicons
          style={styles.textInputIcon}
          name="person-outline"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last name (e.g Doe)"
        />
      </View>

      <View style={styles.textInputContainer}>
        <Entypo
          style={styles.textInputIcon}
          name="email"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          placeholder="Email (e.g janedoe@hotmail.com)"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.textInputContainer}>
        <Entypo
          style={styles.textInputIcon}
          name="old-phone"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          value={phoneNumber}
          onChangeText={setPhoneNUmber}
          placeholder="Phone number (e.g 0765667876)"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.textInputContainer}>
        <Ionicons
          style={styles.textInputIcon}
          name="lock-closed-outline"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.textInputContainer}>
        <Entypo
          style={styles.textInputIcon}
          name="lock"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm password"
          secureTextEntry={true}
        />
      </View>

      <Button
        onPress={() => navigation.navigate('EmailVerification')}
        title="Signup"
      />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text
          style={[
            styles.text,
            {
              marginTop: 20,
              textAlign: 'center',
              marginBottom: 100,
              fontSize: 16,
            },
          ]}>
          Already have an account? <A>Login</A>{' '}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
