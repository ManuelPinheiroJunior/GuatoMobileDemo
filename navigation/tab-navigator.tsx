import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';

import { RootStackParamList } from '.';
import HeaderHome from '../components/HeaderHome';
import Home from '../screens/home';
import Categories from '../screens/categories';
import House from 'assets/icons/House';
import ListCategories from 'assets/icons/ListCategories';
import Notification from 'assets/icons/Notification';
import Message from 'assets/icons/Message';
import Localization from 'components/Localization';
import HomeConquest from 'components/HeaderConquest';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  const handleLocalizationSelect = (value: string) => {
    console.log('Selected position:', value);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <House color={color} />,
          headerLeft: () => (
            <View style={styles.headerContainer}>
              <HeaderHome onPress={() => navigation.navigate('Modal')} />
              <Localization 
                description='CURRENT LOCATION'  
                />
              <HomeConquest />
            </View>
            
          ),
        }}
        
      />
      <Tab.Screen
        name="Categorie List"
        component={Categories}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ListCategories color={color} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Categories}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Notification color={color} SecondaryColor="#6759FF" width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Categories}
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
    display:'flex',
    width: 600,
    height: 80,
    marginTop: 35,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
