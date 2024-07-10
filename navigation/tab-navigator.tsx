import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { RootStackParamList } from 'navigation';
import Header from '../components/Header';
import Home from 'screens/home';
import Categories from 'screens/categories';
import House from 'assets/icons/House';
import ListCategories from 'assets/icons/ListCategories';
import Notification from 'assets/icons/Notification';
import Message from 'assets/icons/Message';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  const [searchText, setSearchText] = useState('');

  const HeaderComponent = ({ path = '' }) => (
    <SafeAreaView style={styles.headerContainer}>
      <Header onPress={() => navigation.navigate('Modal')} path={path} onSearch={setSearchText} searchText={searchText} navigation={navigation} />
    </SafeAreaView>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          backgroundColor: '#FFFFFF',
          display: route.name === 'CategorieList' ? 'none' : 'flex',
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        header: () => <HeaderComponent path={route.name} />,
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <House color={'#6759FF'} />,
        }}
      >
        {(props) => <Home  navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="CategorieList"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ListCategories color={color} />,
        }}
      >
        {(props) => <Categories {...props} searchText={searchText} />}
      </Tab.Screen>
      <Tab.Screen
        name="Notification"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Notification color={color} SecondaryColor="#6759FF" width={24} height={24} />,
        }}
      >
        {(props) => <Home navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Message"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Message color={color} />,
        }}
      >
       {(props) => <Categories {...props} searchText={searchText} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

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
