import React, { forwardRef } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import InputWithSuggestions from './InputWithSuggestions';
import Medal from 'assets/icons/Medal';
import SearchBar from './SearchBar';

type HeaderProps = {
  onPress?: () => void;
  path: string;
  onSearch: (text: string) => void;
  searchText: string;
  navigation?:any;
};

const Header = forwardRef<typeof Pressable, HeaderProps>(({ onPress = () => {}, path, onSearch, searchText, navigation }, ref) => {
  return (
    <>
      {path === 'Home' && (
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
            <Text style={styles.descriptionText}>CURRENT LOCATION</Text>
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
      )}
      {(path === 'CategorieList' || path === 'Category')  && (
        <View style={styles.categorieList}>
          <SearchBar
            placeholder="Search Category"
            iconPosition="both"
            value={searchText}
            onChangeText={onSearch}
            navigation={navigation}
          />
        </View>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
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
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  descriptionText: {
    fontSize: 12,
    color: '#636A75',
    top: 5,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    fontSize: 12,
    color: '#636A75',
  },
  conquestContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
  },
  textPlace: {
    fontSize: 12,
    color: '#F4BF4B',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textPoints: {
    fontSize: 10,
    textDecorationLine: 'underline',
    color: '#636A75',
    marginTop: 5,
    textAlign: 'center',
    bottom: 5,
  },
  medalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  categorieList: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
});

export default Header;
