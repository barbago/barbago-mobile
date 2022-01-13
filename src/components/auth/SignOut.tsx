import React from 'react';
import { Button } from 'react-native';
import { useAuthService } from '../../services';

export const SignOut = () => {
  const { user, signOut } = useAuthService();

  return (
    <Button title="Sign out" disabled={!user} onPress={signOut} />
  );
};
