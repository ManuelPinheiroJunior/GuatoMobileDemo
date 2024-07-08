import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputWithSuggestions from './InputWithSuggestions'; 

type LocalizationProps = {
  description: string;
};

const Localization: React.FC<LocalizationProps> = ({ description }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
      <InputWithSuggestions placeholder='' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  text: {
    fontSize: 12,
    color: '#636A75',
    marginRight: 22,
  },
});

export default Localization;
