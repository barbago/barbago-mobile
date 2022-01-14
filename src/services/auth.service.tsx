import {
  AppleAuthenticationScope,
  signInAsync,
} from 'expo-apple-authentication';
import {
  CryptoDigestAlgorithm,
  digestStringAsync,
} from 'expo-crypto';
import {
  AuthCredential,
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

const signInCredential = async (credential: AuthCredential) => {
  try {
    const userCredential = await signInWithCredential(
      auth,
      credential,
    );
    return userCredential.user;
  } catch (err: any) {
    alert(err.message);
    throw err;
  }
};

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
    const user = await signInCredential(oAuthCredential);
    return user;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

// const signInEmail = async (email: string, password: string) => {
//   try {
//     const credential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password,
//     );
//     const user = credential.user;
//     return user;
//   } catch (err: any) {
//     console.error('Sign in with email failed!');
//     throw err;
//   }
// };

const signInFacebook = async (access_token: string) => {
  try {
    const credential = FacebookAuthProvider.credential(access_token);
    return await signInCredential(credential);
  } catch (err) {
    console.error('Failed to sign in with Facebook!');
    throw err;
  }
};

const signInGoogle = async (id_token: string) => {
  try {
    const credential = GoogleAuthProvider.credential(id_token);
    return await signInCredential(credential);
  } catch (err: any) {
    console.error('Failed to sign in with Google!');
    throw Error(err);
  }
};

const signOut = async () => {
  await firebaseSignout(auth);
};

export interface IAuthContext {
  signInApple: () => Promise<User>;
  signInAnonymous: () => Promise<User>;
  // signInEmail: (email: string, password: string) => Promise<User>;
  signInGoogle: (id_token: string) => Promise<User>;
  signInFacebook: (access_token: string) => Promise<User>;
  signOut: () => Promise<void>;
  user: User | null;
}

export const AuthContext = createContext<IAuthContext>(null!);

export const AuthServiceProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const value: IAuthContext = {
    signInAnonymous,
    signInApple,
    // signInEmail,
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

handle sign in errors
https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#error-codes_10

if (err instanceof FirebaseError) {
  alert(err.message);
  switch (err.code) {
    case 'auth/account-exists-with-different-credential':
    case 'auth/invalid-credential':
    case 'auth/operation-not-allowed':
    case 'auth/user-disabled':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-verification-code':
    case 'auth/invalid-verification-id':
  }
}

*/
