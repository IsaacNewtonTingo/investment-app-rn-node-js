import {ScrollView, TextInput, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../components/globalStyles';

import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

import {Button, LoadingButton} from '../components/button';
import {LongLine, ShortLine} from '../components/shortLine';

const A = props => <Text style={[styles.textLink, {}]}>{props.children}</Text>;

export default function RegPayment() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const [isPosting, setIsPosting] = useState(false);

  async function pay() {}
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/images/regPayment.png')}
        style={[styles.leadIMG, {width: 180, height: 200, marginBottom: 20}]}
      />

      <Text style={styles.subHeading}>Registration fee</Text>

      <Text style={[styles.text, {marginTop: 20, marginBottom: 40}]}>
        You are required to pay a registration fee of <A>KSH. 200</A> as stated
        in our Terms and conditions.{'\n'}If you have a referral code, you can
        use it to get <A>20% discount </A>on your registration fee.
      </Text>

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
          onChangeText={setPhoneNumber}
          placeholder="Phone number (e.g 0765667876)"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.textInputContainer}>
        <Octicons
          style={styles.textInputIcon}
          name="number"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          value={referralCode}
          onChangeText={setReferralCode}
          placeholder="Referral code (e.g yfy7e64rbvuft67r4gvf)"
        />
      </View>

      {isPosting == true ? (
        <LoadingButton />
      ) : (
        <Button onPress={pay} title="Proceed" />
      )}
    </ScrollView>
  );
}
