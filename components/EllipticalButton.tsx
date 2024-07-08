import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type EllipticalButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

const EllipticalButton: React.FC<EllipticalButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <MaterialIcons name="arrow-forward-ios" size={16} color='#6A9B7E' style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, 
    width: 150, 
    height: 40, 
    right: 5,
  },
  buttonText: {
    color: '#6A9B7E',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});

export default EllipticalButton;
