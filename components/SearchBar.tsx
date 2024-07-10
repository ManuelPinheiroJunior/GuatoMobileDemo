import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchButton from 'components/SearchButton';

type SearchBarProps = {
  placeholder: string;
  iconPosition: 'left' | 'right' | 'both';
  value?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  onChangeText: (text: string) => void;
  navigation?: any; 
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, iconPosition, value = '', onPressLeft = () => {}, onPressRight = () => {}, onChangeText, navigation }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleTextChange = (text: string) => {
    setInputValue(text);
    onChangeText(text);
  };

  const handlePressLeft = () => {
    setInputValue(value); 
    onPressLeft();
    onChangeText(inputValue); 
    navigation.navigate('Home'); 
  };

  const handlePressRight = () => {
    setInputValue(value); 
    onPressRight();
    onChangeText(inputValue);
  };

  return (
    <View style={styles.container}>
      {(iconPosition === 'left' || iconPosition === 'both') && (
        <TouchableOpacity style={styles.iconContainer} onPress={handlePressLeft}>
          <SearchButton name='arrowleft' onPress={handlePressLeft}/>
        </TouchableOpacity>
      )}
      <TextInput
        style={[
          styles.input,
          (iconPosition === 'left' || iconPosition === 'both') && styles.inputLeftIcon,
          (iconPosition === 'right' || iconPosition === 'both') && styles.inputRightIcon
        ]}
        value={inputValue}
        onChangeText={handleTextChange}
        placeholder={placeholder}
      />
      {(iconPosition === 'right' || iconPosition === 'both') && (
        <TouchableOpacity style={styles.iconContainer} onPress={handlePressRight}>
          <SearchButton name='search1' onPress={handlePressRight}  />
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
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#FBFBFB',
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
