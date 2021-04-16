import { registerPlugin } from '@capacitor/core';

import type { CAPFirebaseAuthPlugin } from './definitions';

const CAPFirebaseAuth = registerPlugin<CAPFirebaseAuthPlugin>(
  'CAPFirebaseAuth',
  {
    web: () => import('./web').then(m => new m.CAPFirebaseAuthWeb()),
  },
);

export * from './definitions';
export { CAPFirebaseAuth };
