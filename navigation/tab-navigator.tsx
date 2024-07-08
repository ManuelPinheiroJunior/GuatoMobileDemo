import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';

import { RootStackParamList } from '.';
import Header from '../components/Header';
import Home from '../screens/home';
import Categories from '../screens/categories';
import House from 'assets/icons/House';
import ListCategories from 'assets/icons/ListCategories';
import Notification from 'assets/icons/Notification';
import Message from 'assets/icons/Message';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  const handleLocalizationSelect = (value: string) => {
    console.log('Selected position:', value);
  };

  const HeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Header onPress={() => navigation.navigate('Modal')} description="CURRENT LOCATION" />
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          backgroundColor: '#FFFFFF',
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <House color={color} />,
          header: HeaderComponent,
        }}
      />
      <Tab.Screen
        name="Categorie List"
        component={Categories}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ListCategories color={color} />,
          header: HeaderComponent,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Categories}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Notification color={color} SecondaryColor="#6759FF" width={24} height={24} />,
          header: HeaderComponent,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Categories}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Message color={color} />,
          header: HeaderComponent,
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
  },
});
