import React from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../hooks';

export function NoAuth() {
  const { signInAnonymous } = useAuth();
  return (
    <Button
      onPress={signInAnonymous}
      title="Continue without account"
    />
  );
}
