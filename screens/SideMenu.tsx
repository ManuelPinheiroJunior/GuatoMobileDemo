import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { VStack, Button, Switch, HStack, Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import ScreenContent from 'components/ScreenContent';

const SideMenu = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScreenContent path="SideBar" title="SideBar">
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <VStack space={4} style={styles.menuContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://example.com/avatar.png' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
          </View>
          <Divider />
          <Button
            //onPress={() => navigation.navigate('Calendar')}
            leftIcon={<MaterialIcons name="calendar-today" size={24} color="white" />}
            style={styles.menuItem}
          >
            Calendar
          </Button>
          <Button
            // onPress={() => navigation.navigate('PaymentMethods')}
            leftIcon={<FontAwesome name="credit-card" size={24} color="white" />}
            style={styles.menuItem}
          >
            Payment Methods
          </Button>
          <Button
            // onPress={() => navigation.navigate('Address')}
            leftIcon={<MaterialIcons name="location-pin" size={24} color="white" />}
            style={styles.menuItem}
          >
            Address
          </Button>
          <Button
            // onPress={() => navigation.navigate('Notifications')}
            leftIcon={<MaterialIcons name="notifications" size={24} color="white" />}
            style={styles.menuItem}
          >
            Notifications
          </Button>
          <Button
            // onPress={() => navigation.navigate('Offers')}
            leftIcon={<MaterialIcons name="local-offer" size={24} color="white" />}
            style={styles.menuItem}
          >
            Offers
          </Button>
          <Button
            // onPress={() => navigation.navigate('ReferAFriend')}
            leftIcon={<MaterialIcons name="group-add" size={24} color="white" />}
            style={styles.menuItem}
          >
            Refer a Friend
          </Button>
          <Button
            //  onPress={() => navigation.navigate('Support')}
            leftIcon={<MaterialIcons name="support-agent" size={24} color="white" />}
            style={styles.menuItem}
          >
            Support
          </Button>
        </VStack>
        <Divider />
        <HStack style={styles.footer}>
          <MaterialIcons name="color-lens" size={24} color="white" />
          <Text style={styles.footerText}>Colour Scheme</Text>
          <Switch
            isChecked={isDarkMode}
            onToggle={handleToggleTheme}
            offTrackColor="lightgray"
            onTrackColor="gray"
            onThumbColor="black"
            offThumbColor="white"
          />
        </HStack>
      </View>
    </ScreenContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    justifyContent: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
    color: 'white',
  },
});

export default SideMenu;
