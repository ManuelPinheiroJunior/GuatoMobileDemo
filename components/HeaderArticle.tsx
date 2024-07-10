import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Divider from './Divider';

type HeaderArticleProps = {
  dividerColor?: string;
  text?: string;
  ButtonComponent?: React.ReactNode;
  ButtonComponenteComplementary?: React.ReactNode;
};

const HeaderArticle: React.FC<HeaderArticleProps> = ({ dividerColor = '#000', text = '', ButtonComponent, ButtonComponenteComplementary }) => {
  return (
    <View style={styles.container}>
      <Divider color={dividerColor} thickness={2} style={styles.divider} />
      <Text style={styles.text}>{text}</Text>
      {ButtonComponent}
      {ButtonComponenteComplementary}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  divider: {
    height: 20,
    width: 5,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    fontFamily:'Inter',
    fontSize: 22,
    color: '#1A1D1F',
    marginHorizontal: 2,
    fontWeight: '700',
    lineHeight: 21,

  },
});

export default HeaderArticle;
