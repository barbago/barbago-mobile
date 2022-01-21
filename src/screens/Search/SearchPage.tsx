import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Text, Screen } from '../../components';
import { RootTabScreenProps } from '../../navigation/types';
import { Map } from './Map';

export const SearchPage: React.FC<RootTabScreenProps<'Search'>> = ({
  children,
  navigation,
}) => {
  const modalizeRef = useRef<Modalize>(null);

  return (
    <Screen>
      <Button
        title="Open"
        onPress={() => {
          modalizeRef.current?.open();
        }}
      />
      <Map />
      <Modalize
        ref={modalizeRef}
        handlePosition="inside"
        modalStyle={{ shadowRadius: 16 }}
      >
        <Text>AAaa</Text>
      </Modalize>
    </Screen>
  );
};
