import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7824 11.8421C16.7557 11.5962 18.2827 9.91294 18.2827 7.87302C18.2827 5.83311 16.7557 4.14984 14.7824 3.90393C15.7161 4.96167 16.2827 6.35118 16.2827 7.87302C16.2827 9.39486 15.7161 10.7844 14.7824 11.8421Z" fill="#D1D3D4"/>
<path d="M20.2827 20.873C20.2827 21.4253 20.7304 21.873 21.2827 21.873C21.835 21.873 22.2827 21.4253 22.2827 20.873V18.873C22.2827 16.2129 20.2054 14.038 17.5845 13.882C18.6366 14.8137 19.4415 16.0183 19.8882 17.385C20.1392 17.8235 20.2827 18.3315 20.2827 18.873V20.873Z" fill="#D1D3D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.28271 15.873C5.62586 15.873 4.28271 17.2162 4.28271 18.873V20.873C4.28271 21.4253 3.835 21.873 3.28271 21.873C2.73043 21.873 2.28271 21.4253 2.28271 20.873V18.873C2.28271 16.1116 4.52129 13.873 7.28271 13.873H13.2827C16.0441 13.873 18.2827 16.1116 18.2827 18.873V20.873C18.2827 21.4253 17.835 21.873 17.2827 21.873C16.7304 21.873 16.2827 21.4253 16.2827 20.873V18.873C16.2827 17.2162 14.9396 15.873 13.2827 15.873H7.28271Z" fill="${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2827 5.87305C9.17815 5.87305 8.28271 6.76848 8.28271 7.87305C8.28271 8.97762 9.17815 9.87305 10.2827 9.87305C11.3873 9.87305 12.2827 8.97762 12.2827 7.87305C12.2827 6.76848 11.3873 5.87305 10.2827 5.87305ZM6.28271 7.87305C6.28271 5.66391 8.07358 3.87305 10.2827 3.87305C12.4919 3.87305 14.2827 5.66391 14.2827 7.87305C14.2827 10.0822 12.4919 11.873 10.2827 11.873C8.07358 11.873 6.28271 10.0822 6.28271 7.87305Z" fill="${color}"/>
</svg>
`;

const ReferAFriendIcon: React.FC<IcontType> = ({ color = '#D1D3D4', width = 18, height = 18 }) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={getSvgContent(color)} width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReferAFriendIcon;


