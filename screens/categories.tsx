import React, { useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import Container from "components/Container";
import { ScreenContent } from "components/ScreenContent";
import { StyleSheet } from "react-native";
import CircleButton from 'components/CircleButton';
import AcRepair from 'assets/icons/AcRepair';
import Beauty from 'assets/icons/Beauty';
import Appliance from 'assets/icons/Appliance';
import Painting from 'assets/icons/Painting';
import Cleaning from 'assets/icons/Cleaning';
import Plumbing from 'assets/icons/Plumbing';
import Electronics from 'assets/icons/Electronics';
import Shifting from 'assets/icons/Shifting';
import MensSalon from 'assets/icons/Mens_Salon';
import HeaderArticle from 'components/HeaderArticle';

const categories = [
  {id: 1, icon: AcRepair, backgroundColor: "#FFBC99", subTitle: 'AC Repair' },
  {id: 2, icon: Beauty, backgroundColor: "#CABDFF", subTitle: 'Beauty' },
  {id: 3, icon: Appliance, backgroundColor: "#B1E5FC", subTitle: 'Appliance' },
  {id: 4, icon: Painting, backgroundColor: "#B5EBCD", subTitle: 'Painting' },
  {id: 5, icon: Cleaning, backgroundColor: "#FFD88D", subTitle: 'Cleaning' },
  {id: 6, icon: Plumbing, backgroundColor: "#CBEBA4", subTitle: 'Plumbing' },
  {id: 7, icon: Electronics, backgroundColor: "#FB9B9B", subTitle: 'Electronics' },
  {id: 8, icon: Shifting, backgroundColor: "#F8B0ED", subTitle: 'Shifting' },
  {id: 9, icon: MensSalon, backgroundColor: "#AFC6FF", subTitle: "Men's Salon" }
];

type CategoriesProps = {
  searchText: string;
};

const Categories: React.FC<CategoriesProps> = ({ searchText }) => {
  const filteredCategories = searchText
    ? categories.filter(category => 
        category.subTitle.toLowerCase().includes(searchText.toLowerCase())
      )
    : categories;

  const onProgress = () => {};

  return (
    <NativeBaseProvider>
      <ScreenContent path="CategorieList" title="CategorieList">
        <Container style={styles.container}>
          <HeaderArticle text='All Categories' dividerColor='#CABDFF' />
          {filteredCategories.map((category, index) => (
            <CircleButton
              key={index}
              Icon={category.icon}
              backgroundColor={category.backgroundColor}
              iconSize={36}
              size={82}
              subTitleFontSize={18}
              iconColor="#2C2B46"
              onPress={onProgress}
              subTitle={category.subTitle}
            />
          ))}
        </Container>
      </ScreenContent>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  container: {
    alignItems: 'center',
    padding: 16,
    width: '98%',
    height: 'auto',
    marginHorizontal: 'auto',
    gap: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    width: 149,
    height: 26,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 26,
    letterSpacing: 2,
    color: '#666C89',
  },
  body: {
    width: 312,
    height: 80,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 35,
    lineHeight: 41,
    letterSpacing: -3,
    color: '#172B4D',
    bottom: 10,
  },
});

export default Categories;
