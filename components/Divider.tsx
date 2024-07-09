import React from 'react';
import { View, StyleSheet } from 'react-native';

type DividerProps = {
  color?: string;
  thickness?: number;
  style?: object;
};

const Divider: React.FC<DividerProps> = ({ color = '#000', thickness = 5, style = {} }) => {
  return (
    <View style={[styles.divider, { backgroundColor: color, width: thickness }, style]} />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: '100%',
    marginHorizontal: 8,
  },
});

export default Divider;
