import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Location = {
  street: string;
  city: string;
  country: string; 
};

const initialSate: Location = { street: "15A", city: "James Street", country: "" };

const data: Location[] = [
  { street: "15A", city: "James Street", country: "" },
  { street: "456 Elm St", city: "San Francisco", country: "USA" },
  { street: "789 Maple St", city: "Toronto", country: "Canada" },
  { street: "101 Pine St", city: "Vancouver", country: "Canada" },
  { street: "202 Oak St", city: "London", country: "UK" },
  { street: "303 Birch St", city: "Manchester", country: "UK" }
];

type InputWithIconAndListProps = {
  placeholder: string;
};

const InputWithSuggestions: React.FC<InputWithIconAndListProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState(`${initialSate.street}, ${initialSate.city}`);
  const [filteredData, setFilteredData] = useState<Location[]>(data);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleIconPress = () => {
    setIsListVisible(!isListVisible);
    if (!isListVisible) {
      Keyboard.dismiss();
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    const filtered = data.filter(item =>
      item.street.toLowerCase().includes(value.toLowerCase()) ||
      item.city.toLowerCase().includes(value.toLowerCase()) ||
      item.country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setIsListVisible(true);
  };

  const handleItemPress = (item: Location) => {
    setInputValue(`${item.street}, ${item.city}, ${item.country}`);
    setIsListVisible(false);
    Keyboard.dismiss();
  };

  const renderItem = ({ item }: { item: Location }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
      <Text style={styles.text}>{item.street}, {item.city}, {item.country}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={[styles.inputContainer, isListVisible && styles.inputContainerExpanded]}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder={placeholder}
            onFocus={() => setIsListVisible(true)}
          />
          <TouchableOpacity onPress={handleIconPress}>
            <MaterialIcons name="arrow-drop-down" size={25} color="black" />
          </TouchableOpacity>
        </View>
        {isListVisible && (
          <View style={styles.listContainer}>
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              style={styles.list}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    minWidth: 180,
    justifyContent:"flex-start",
    alignItems: 'flex-start',
    textAlign: 'left',

    width: '100%',
    zIndex: 1,
    fontWeight: '900',
  },
  inputContainerExpanded: {
    width: '100%',
  },
  input: {
      minWidth: 120,
     fontWeight: '600',
  },
  icon: {
    marginLeft: 10,
  },
  listContainer: {
    position: 'absolute',
    top: 40, 
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    color: '#172B4D',
  },
  list: {
    maxHeight: 150,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#172B4D',
  },
  text: {
    fontSize: 16,
  },
});

export default InputWithSuggestions;
