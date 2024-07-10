import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type FilterButtonProps = {
  Icon: React.ReactNode;
  onPress: () => void;
  backgroundColor?: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({
  Icon,
  onPress,
  backgroundColor = '#F7F7F7' 
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#F7F7F7' : backgroundColor }
      ]}
    >
      <View style={styles.iconContainer}>
        {Icon}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 5,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    marginRight: 0,
  },
});

export default FilterButton;
