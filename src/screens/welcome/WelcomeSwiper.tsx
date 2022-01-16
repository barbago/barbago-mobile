import React from 'react';

import { Image, ListRenderItemInfo } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { View, Text } from '../../components/Themed';
import { useColorScheme } from '../../hooks';
import { RootTabScreenProps } from '../../navigation/types';

interface SlideItem {
  key: number;
  title: string;
  text: string;
  backgroundColor?: string;
  image?: any;
}

const slides: SlideItem[] = [
  {
    key: 1,
    title: 'Welcome!',
    text: 'Barbago is the platform for finding the best and most convenient barber around.',
    // image: require(''),
  },
  {
    key: 2,
    title: 'Get the Best Cut',
    text: 'Search for the barber with all the services you need.',
    // image: require(''),
  },
  {
    key: 3,
    title: 'Ease of Use',
    text: 'Set up appointments with any barber or have them come directly to your home!',
    // image: require(''),
  },
];

function renderItem({ item }: ListRenderItemInfo<SlideItem>) {
  return <Text>{item.title}</Text>;
}

export function WelcomeSwiper({
  navigation,
}: RootTabScreenProps<'TabTwo'>) {
  const theme = useColorScheme();

  const onDone = () => {
    navigation.navigate('TabOne');
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      scrollEnabled={true}
      dotStyle={{ backgroundColor: '#77777777' }}
      activeDotStyle={{
        backgroundColor: theme === 'light' ? '#000' : '#fff',
      }}
    />
  );
}
