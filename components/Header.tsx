import React, { forwardRef } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import InputWithSuggestions from './InputWithSuggestions'; // ajuste o caminho conforme necessário
import Medal from 'assets/icons/Medal'; // ajuste o caminho conforme necessário

type HeaderProps = {
  onPress?: () => void;
  description: string;
};

const Header = forwardRef<typeof Pressable, HeaderProps>(({ onPress, description }, ref) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={onPress} style={styles.iconContainer}>
        {({ pressed }) => (
          <Octicons
            name="three-bars"
            size={30}
            color="#25283C"
            style={[
              styles.icon,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          />
        )}
      </Pressable>
      <View style={styles.middleContainer}>
        <Text style={{...styles.text}}>{description}</Text>
        <InputWithSuggestions placeholder="" />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.conquestContainer}>
          <Text style={styles.textPlace}>BRONZE</Text>
          <Text style={styles.textPoints}>0 points</Text>
        </View>
        <View style={styles.medalContainer}>
          <Medal />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF', 
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 10,
  },
  middleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'baseline',
    marginLeft: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    fontSize: 12,
    color: '#636A75',
    marginBottom: 5,
  },
  conquestContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
  },
  textPlace: {
    fontSize: 12,
    color: '#F4BF4B',
    alignItems:'center'
  },
  textPoints: {
    fontSize: 10,
    textDecorationLine: 'underline',
    color: '#636A75',
    marginTop: 5,
  },
  medalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default Header;
