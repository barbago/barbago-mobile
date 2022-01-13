import {
  AppleAuthenticationScope,
  signInAsync,
} from 'expo-apple-authentication';
import {
  CryptoDigestAlgorithm,
  digestStringAsync,
} from 'expo-crypto';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut as firebaseSignout,
  User,
} from 'firebase/auth';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { auth } from '../constants/firebase';

export interface IAuthContext {
  signInApple: () => Promise<User>;
  signInAnonymous: () => Promise<User>;
  signInEmail: (email: string, password: string) => Promise<User>;
  signInGoogle: (id_token: string) => Promise<User>;
  signInFacebook: (access_token: string) => Promise<User>;
  signOut: () => Promise<void>;
  user: User | null;
}

export const AuthContext = createContext<IAuthContext>(null!);

export const AuthServiceProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signInAnonymous = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      return user;
    } catch (err: any) {
      console.error('Failed to sign in anonymously!');
      throw Error(err);
    }
  };

  const signInApple = async () => {
    try {
      const nonce = Math.random().toString(36).substring(2, 10);
      const hashedNonce = await digestStringAsync(
        CryptoDigestAlgorithm.SHA256,
        nonce,
      );
      const appleCredential = await signInAsync({
        requestedScopes: [
          AppleAuthenticationScope.FULL_NAME,
          AppleAuthenticationScope.EMAIL,
        ],
        nonce: hashedNonce,
      });
      const { identityToken } = appleCredential;
      const provider = new OAuthProvider('apple.com');
      const oAuthCredential = provider.credential({
        idToken: identityToken!,
        rawNonce: nonce,
      });
      const userCredential = await signInWithCredential(auth, oAuthCredential);
      const user = userCredential.user;
      return user;
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  const signInEmail = async (email: string, password: string) => {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = credential.user;
      return user;
    } catch (err: any) {
      console.error('Sign in with email failed!');
      throw err;
    }
  };

  const signInFacebook = async (access_token: string) => {
    try {
      const credential =
        FacebookAuthProvider.credential(access_token);

      const userCredential = await signInWithCredential(
        auth,
        credential,
      );

      const user = userCredential.user;
      return user;
    } catch (err) {
      console.error('Failed to sign in with Facebook!');
      throw err;
    }
  };

  const signInGoogle = async (id_token: string) => {
    try {
      const credential = GoogleAuthProvider.credential(id_token);

      const userCredential = await signInWithCredential(
        auth,
        credential,
      );

      const user = userCredential.user;
      return user;
    } catch (err: any) {
      console.error('Failed to sign in with Google!');
      throw Error(err);
    }
  };

  const signOut = async () => {
    await firebaseSignout(auth);
  };

  const value: IAuthContext = {
    signInAnonymous,
    signInApple,
    signInEmail,
    signInFacebook,
    signInGoogle,
    signOut,
    user,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user: ', user);
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthService = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw Error('Cannot useAuthService outside a provider');
  return authContext;
};


/*
TODO

link anonymous accounts with proper account
https://firebase.google.com/docs/auth/web/anonymous-auth#web-version-9_5

implement proper login/signup with email

active apple developer account 
https://medium.com/nerd-for-tech/apple-google-authentication-in-expo-apps-using-firebase-997125440032#b10b
*/
