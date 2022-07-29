import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import styles from '../components/globalStyles';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/button';
import axios from 'axios';

const A = props => <Text style={styles.textLink}>{props.children}</Text>;

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPosting, setIsPosting] = useState(false);

  async function login() {
    if (!email || !password) {
      Alert.alert('All fields are required');
      setIsPosting(false);
    } else {
      setIsPosting(true);
      await axios
        .post('https://049c-105-163-1-68.in.ngrok.io/user/signin', {
          email: email,
          password: password,
        })
        .catch(err => {
          console.log(err);
          setIsPosting(false);
        })
        .then(response => {
          console.log(response.data.data[0]._id);
          setIsPosting(false);
          Alert.alert(response.data.message);
        });
    }
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      bounces={true}
      style={styles.container}>
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

      <Button onPress={login} title="Login" />

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
