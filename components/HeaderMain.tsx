import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Header from 'components/Header';
import { RootStackParamList } from 'navigation';

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'> & {
  path: string;
};

const HeaderMain: React.FC<Props> = ({ path, navigation }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Header onPress={() => navigation.navigate('SideBar')} path={path} onSearch={setSearchText} searchText={searchText} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default HeaderMain;
