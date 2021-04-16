import firebase from 'firebase/app';

export interface CAPFirebaseAuthPlugin {
  signIn(options: {
    providerId: 'google.com' | 'microsoft.com' | 'apple.com';
  }): Promise<firebase.User | null>;

  signOut(): Promise<void>;
}
