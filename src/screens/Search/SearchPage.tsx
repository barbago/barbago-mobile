import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { Text, Screen, Modal } from '../../components';
import { RootTabScreenProps } from '../../navigation/types';
import { Map } from './Map';

export const SearchPage: React.FC<RootTabScreenProps<'Search'>> = ({
  children,
  navigation,
}) => {
  const modalizeRef = useRef<Modalize>(null);

  return (
    <Screen edges={['top']} scrolling={false}>
      <Map />
      <Modal ref={modalizeRef}>
        <Text>AAA</Text>
      </Modal>
    </Screen>
  );
};
