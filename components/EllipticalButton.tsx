import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import EditProfile from 'assets/icons/EditProfile';

type EllipticalButtonProps = {
  title: string;
  colorText?: string;
  fontText?: number;
  onPress: () => void;
  style?: ViewStyle;
  showEditProfileIcon?: boolean;
};

const EllipticalButton: React.FC<EllipticalButtonProps> = ({ title, colorText = '#6A9B7E', fontText = 16, onPress, style, showEditProfileIcon = false }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: colorText, fontSize: fontText }]}>{title}</Text>
      {showEditProfileIcon ? (
        <EditProfile />
      ) : (
        <MaterialIcons name="arrow-forward-ios" size={16} color={colorText} style={styles.icon} />
      )}
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
