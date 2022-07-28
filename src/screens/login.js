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

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView bounces={true} style={styles.container}>
      <Image
        style={{
          width: 300,
          height: 100,
          alignSelf: 'center',
          marginVertical: 40,
        }}
        source={require('../assets/images/loginIMG.png')}
      />

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

      <Button title="Login" />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
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
          Don't have an account? <A>Signup</A>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
