import React from 'react';
import { Button } from 'react-native';

import { useAuthService } from '../../services';

export function NoAuth() {
  const { signInAnonymous } = useAuthService();
  return (
    <Button
      onPress={signInAnonymous}
      title="Continue without account"
    />
  );
}
