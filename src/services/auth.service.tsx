import {
  GoogleAuthProvider,
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
  // signInApple: () => Promise<User>;
  signInAnonymous: () => Promise<User>;
  // signInEmail: (email: string, password: string) => Promise<User>;
  signInGoogle: (id_token: string) => Promise<User>;
  // signInFacebook: () => Promise<User>;
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
      setUser(user);
      return user;
    } catch (err: any) {
      console.error('Failed to sign in anonymously!');
      throw Error(err);
    }
  };

  // const signInApple = async () => {};

  const signInEmail = async (email: string, password: string) => {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = credential.user;
      setUser(user);
      return user;
    } catch (err: any) {
      console.error('Sign in with email failed!');
      throw Error(err);
    }
  };

  // const signInFacebook = async () => {};

  const signInGoogle = async (id_token: string) => {
    try {
      const credential = GoogleAuthProvider.credential(id_token);

      const userCredential = await signInWithCredential(
        auth,
        credential,
      );

      const user = userCredential.user;
      setUser(user);
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
    // signInApple,
    // signInEmail,
    // signInFacebook,
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

// https://blog.testdouble.com/posts/2021-03-19-react-context-for-dependency-injection-not-state/

// Hooks implementation
// https://medium.com/the-guild/injectable-services-in-react-de0136b6d476

/*
TODO

link anonymous accounts with proper account
https://firebase.google.com/docs/auth/web/anonymous-auth#web-version-9_5

implement proper login/signup with email

*/
