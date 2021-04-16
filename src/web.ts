import firebase from 'firebase/app';

import { WebPlugin } from '@capacitor/core';

import type { CAPFirebaseAuthPlugin } from './definitions';

export class CAPFirebaseAuthWeb
  extends WebPlugin
  implements CAPFirebaseAuthPlugin {
  async signIn(options: {
    providerId: 'google.com' | 'microsoft.com' | 'apple.com';
  }): Promise<firebase.User | null> {
    switch (options.providerId) {
      case 'google.com':
        return this.signInWithGoogle();

      case 'microsoft.com':
        return this.signInWithMicrosoft();

      case 'apple.com':
        return this.signInWithApple();

      default:
        return null;
    }
  }

  async signOut(): Promise<void> {
    return firebase.auth().signOut();
  }

  // ------------

  private async signInWithGoogle(): Promise<firebase.User | null> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    provider.addScope('profile');
    provider.addScope('email');

    const res = await firebase.auth().signInWithPopup(provider);
    return res.user;
  }

  private async signInWithMicrosoft(): Promise<firebase.User | null> {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    provider.addScope('profile');
    provider.addScope('email');

    const res = await firebase.auth().signInWithPopup(provider);
    return res.user;
  }

  private async signInWithApple(): Promise<firebase.User | null> {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    provider.addScope('profile');
    provider.addScope('email');

    const res = await firebase.auth().signInWithPopup(provider);
    return res.user;
  }
}
