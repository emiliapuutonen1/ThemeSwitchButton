

import {Text, View} from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Styles from '../Styles';
import { useTheme } from '../context/UseTheme';

export default function Home() {
  const {isDarkMode} = useTheme();
  console.log(isDarkMode);
  
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  );
}
