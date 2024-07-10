import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, View } from 'react-native';
import SearchBarIcon from 'assets/icons/Search';
import ArrowLeft from 'assets/icons/ArrowLeft';

type IconButtonProps = {
  name: string;
  onPress?: () => void;
  style?: ViewStyle;
};

const SearchButton: React.FC<IconButtonProps> = ({ name, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        name === 'arrowleft' ? styles.buttonArrowLeft : styles.button,
        style
      ]}
      onPress={onPress}
    >
      {name === 'search1' && <SearchBarIcon />}
      {name === 'arrowleft' && <ArrowLeft />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6759FF',
    padding: 10,
    borderRadius: 8,
    width: 32,
    height: 32,
  },
  buttonArrowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 32,
    height: 32,
  },
});

export default SearchButton;
