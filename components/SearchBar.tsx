import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchButton from 'components/SearchButton';

type SearchBarProps = {
  placeholder: string;
  iconPosition: 'left' | 'right';
  onPress: () => void; 
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, iconPosition, onPress }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      {iconPosition === 'left' && (
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <SearchButton name='search1' onPress={onPress} />
        </TouchableOpacity>
      )}
      <TextInput
        style={[styles.input, iconPosition === 'left' ? styles.inputLeftIcon : styles.inputRightIcon]}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder={placeholder}
      />
      {iconPosition === 'right' && (
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <SearchButton name='search1' onPress={onPress} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'white',
  },
  iconContainer: {
    padding: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  inputLeftIcon: {
    marginLeft: 8,
  },
  inputRightIcon: {
    marginRight: 8,
  },
});

export default SearchBar;
