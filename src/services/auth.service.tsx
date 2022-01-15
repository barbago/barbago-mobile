import {
  AppleAuthenticationScope,
  signInAsync,
} from 'expo-apple-authentication';
import {
  CryptoDigestAlgorithm,
  digestStringAsync,
} from 'expo-crypto';
import { FirebaseError } from 'firebase/app';
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

const handleFirebaseError = (error: FirebaseError) => {
  let { message } = error;

  switch (error.code) {
    case 'auth/account-exists-with-different-credential':
      message = 'Account exists with different credential! ';
      break;
    case 'auth/invalid-credential':
      message = 'Invalid credentials. Try again!';
      break;
    case 'auth/invalid-email':
      message = 'Email is invalid. Please use a valid email.';
      break;
    case 'auth/user-disabled':
      message =
        'Your account has been disabled! Please contact support.';
      break;
    case 'auth/user-not-found':
      message = 'User does not exist. Create an account!';
      break;
    case 'auth/wrong-password':
      message = 'Incorrect password. Try again!';
      break;
    default:
      console.error(error);
  }
  alert(message);
  // https://github.com/jeanverster/react-native-styled-toast
};

const signInCredential = async (credential: AuthCredential) => {
  try {
    const userCredential = await signInWithCredential(
      auth,
      credential,
    );
    console.log(userCredential.user);
  } catch (err: any) {
    if (err instanceof FirebaseError) handleFirebaseError(err);
    else console.error(err);
  }
};

const signInAnonymous = async () => {
  const userCredential = await signInAnonymously(auth);
};

const signInApple = async () => {
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
  await signInCredential(oAuthCredential);
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
  const credential = FacebookAuthProvider.credential(access_token);
  return await signInCredential(credential);
};

const signInGoogle = async (id_token: string) => {
  const credential = GoogleAuthProvider.credential(id_token);
  return await signInCredential(credential);
};

const signOut = async () => {
  await firebaseSignout(auth);
};

export interface IAuthContext {
  signInApple: () => Promise<void>;
  signInAnonymous: () => Promise<void>;
  // signInEmail: (email: string, password: string) => Promise<void>;
  signInGoogle: (id_token: string) => Promise<void>;
  signInFacebook: (access_token: string) => Promise<void>;
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
  
}

*/
