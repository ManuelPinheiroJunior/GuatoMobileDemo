import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView } from 'react-native';

import { RootStackParamList } from 'navigation';
import Header from 'components/Header';
import Home from 'screens/Home';
import Service from 'screens/Service';
import Categories from 'screens/Categories';
import ExtraPage from 'screens/ExtraPage';
import House from 'assets/icons/House';
import ListCategories from 'assets/icons/ListCategories';
import Profile from 'screens/Profile';
import Notification from 'assets/icons/Notification';
import Message from 'assets/icons/Message';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  const [searchText, setSearchText] = useState('');

  const HeaderTabHome = ({ path = '' }) => (
    <SafeAreaView style={styles.headerContainer}>
      <Header
        onPress={() => navigation.navigate('SideMenu')}
        path={path}
        onSearch={setSearchText}
        searchText={searchText}
        navigation={navigation}
      />
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
        header: () => <HeaderTabHome path={route.name} />,
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <House color={'#6759FF'} />,
        }}
      >
        {(props) => <Home navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Categories"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ListCategories color={color} />,
          tabBarStyle: { display: 'none' },
        }}
      >
        {(props) => <Categories {...props} searchText={searchText} navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Service"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Notification color={color} SecondaryColor="#6759FF" width={24} height={24} />,
          tabBarStyle: { display: 'none' },
        }}
      >
        {(props) => <Service id={1} name={'w'} navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          title: '',
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
        }}
      >
        {(props) => <Profile />}
      </Tab.Screen>
      <Tab.Screen
        name="ExtraPage"
        component={ExtraPage}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Message color={color} />,
        }}
      />
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
