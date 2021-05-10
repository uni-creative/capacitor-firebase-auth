import firebase from 'firebase/app';

import { WebPlugin } from '@capacitor/core';

import type { CAPFirebaseAuthPlugin } from './definitions';

export class CAPFirebaseAuthWeb
  extends WebPlugin
  implements CAPFirebaseAuthPlugin {
  /**
   *
   * @param options
   * @returns
   */
  async signIn(options: {
    providerId: 'google.com' | 'microsoft.com' | 'apple.com';
  }): Promise<firebase.User | null> {
    const { providerId } = options;
    return this.signInWithOAuth(providerId);
  }

  /**
   *
   * @returns
   */
  async signOut(): Promise<void> {
    return firebase.auth().signOut();
  }

  /**
   *
   * @param providerId
   * @returns
   */
  private async signInWithOAuth(
    providerId: 'google.com' | 'microsoft.com' | 'apple.com',
  ): Promise<firebase.User | null> {
    if (['google.com', 'microsoft.com'].includes(providerId)) {
      const provider = new firebase.auth.OAuthProvider(providerId);
      provider.setCustomParameters({
        prompt: 'select_account',
      });
      provider.addScope('profile');
      provider.addScope('email');

      const res = await firebase.auth().signInWithPopup(provider);
      return res.user;
    } else {
      return null;
    }
  }
}
