import { WebPlugin } from '@capacitor/core';

import type { CAPFirebaseAuthPlugin } from './definitions';

export class CAPFirebaseAuthWeb
  extends WebPlugin
  implements CAPFirebaseAuthPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
