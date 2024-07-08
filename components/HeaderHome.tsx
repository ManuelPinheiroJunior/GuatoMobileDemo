import React, { forwardRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export const HeaderButton = forwardRef<typeof Pressable, { onPress?: () => void }>(
  ({ onPress }, ref) => {
    return <>
      <Pressable  onPress={onPress} style={styles.headerLeft}>
        {({ pressed }) => (
          <Octicons 
          name="three-bars" 
          size={32} 
          color="#25283C" 
          style={[
              styles.headerLeft,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]} />
        )}
      </Pressable>
    </>
  }
);

export default HeaderButton;

export const styles = StyleSheet.create({
  headerLeft: {
    margin: 5
  },
});
