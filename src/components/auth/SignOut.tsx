import React from 'react';
import { Button } from 'react-native';
import { useAuth } from '../../hooks';

export const SignOut = () => {
  const { user, signOut } = useAuth();

  return (
    <Button title="Sign out" disabled={!user} onPress={signOut} />
  );
};
