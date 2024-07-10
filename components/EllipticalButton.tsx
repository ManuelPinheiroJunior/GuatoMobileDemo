import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type EllipticalButtonProps = {
  title: string;
  colorText?: string;
  fontText?: number;
  onPress: () => void;
  style?: ViewStyle;
};

const EllipticalButton: React.FC<EllipticalButtonProps> = ({ title, colorText = '#6A9B7E', fontText = 16, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: colorText }, {fontSize: fontText }]}>{title}</Text>
      <MaterialIcons name="arrow-forward-ios" size={16} color={colorText} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: 125,
    height: 40,
    right: 5,
  },
  buttonText: {
    fontSize: 16,
    marginRight: 5,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 5, 
  },
});

export default EllipticalButton;
