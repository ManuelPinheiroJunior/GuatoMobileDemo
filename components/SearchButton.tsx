import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, View } from 'react-native';
import SearchBar from 'assets/icons/Search';

type IconButtonProps = {
  name: string;
  onPress: () => void;
  style?: ViewStyle;
};

const SearchButton: React.FC<IconButtonProps> = ({ name, onPress, style }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <SearchBar />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6759FF',
    padding: 10,
    borderRadius: 8,
    width: 32,
    height: 32,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SearchButton;
