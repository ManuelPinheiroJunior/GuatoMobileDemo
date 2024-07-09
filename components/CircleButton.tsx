import IcontType from 'assets/icons/IcontType';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


type CircleButtonProps = {
  Icon: React.FC<IcontType>;
  size?: number;
  backgroundColor?: string;
  borderColor?: string;
   borderWidth?: number;
  onPress: () => void;
  iconSize?: number;
  iconColor?: string;
  subTitle?: string;
};

const CircleButton = ({
  Icon,
  size = 62,
  backgroundColor = '#FAFAFA',
  borderColor = '#ECECEC',
  borderWidth = 0,
  onPress,
  iconSize = 32,
  iconColor = '#fff',
  subTitle,
}: CircleButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor, width: size, height: size, borderRadius: size / 2, borderColor, borderWidth}]}
        onPress={onPress}
      >
        <Icon width={iconSize} height={iconSize} color={iconColor}  />
      </TouchableOpacity>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 6,
    padding: 2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FAFAFA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  subTitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#000',
  },
});

export default CircleButton;
