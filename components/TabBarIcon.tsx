import { StyleSheet } from 'react-native';
import IcontType from '../assets/icons/IcontType';

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof IcontType>;
}) => {
  return {...props};
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
