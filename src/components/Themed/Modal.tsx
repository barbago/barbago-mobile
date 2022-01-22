import React, { forwardRef } from 'react';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { useThemeColor } from '../../hooks';

export const Modal = forwardRef<Modalize, ModalizeProps>(
  ({ children, ...rest }, ref) => {
    const modalBg = useThemeColor({}, 'background');
    const handleBg = useThemeColor({}, 'tabIconDefault');

    return (
      <Modalize
        ref={ref}
        handlePosition="inside"
        modalTopOffset={200}
        alwaysOpen={75}
        disableScrollIfPossible={true}
        modalStyle={{ backgroundColor: modalBg }}
        handleStyle={{ backgroundColor: handleBg }}
        {...rest}
      >
        {children}
      </Modalize>
    );
  },
);