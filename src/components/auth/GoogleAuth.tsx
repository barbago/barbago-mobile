import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';
import { useAuthService } from '../../services';

maybeCompleteAuthSession();

// https://docs.expo.dev/guides/authentication/#google
export function GoogleAuth() {
  const { signInGoogle } = useAuthService();
  const [request, response, promptAsync] = useIdTokenAuthRequest({
    clientId:
      '826208380986-b35gmhcidcsm9415okp8tj8nrj63ehhr.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      signInGoogle(id_token);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
      title="Signup with Google"
    />
  );
}