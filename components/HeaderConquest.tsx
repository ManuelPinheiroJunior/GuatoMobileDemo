import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Medal from 'assets/icons/Medal';

const HomeConquest: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textPlace}>BRONZE</Text>
        <Text style={styles.textPoints}>0 points</Text>
      </View>
      <View style={styles.iconContainer}>
        <Medal />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 10,
  },
  textPlace: {
    fontSize: 10,
    color: '#F4BF4B',
  },
  textPoints: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#636A75',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeConquest;
