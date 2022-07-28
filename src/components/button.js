import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './globalStyles';

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
