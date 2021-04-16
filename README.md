# capacitor-firebase-auth

Firebase auth

## Install

```bash
npm install capacitor-firebase-auth
npx cap sync
```

## API

<docgen-index>

* [`signIn(...)`](#signin)
* [`signOut()`](#signout)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### signIn(...)

```typescript
signIn(options: { providerId: 'google.com' | 'microsoft.com' | 'apple.com'; }) => Promise<firebase.User | null>
```

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ providerId: "google.com" \| "microsoft.com" \| "apple.com"; }</code> |

**Returns:** <code>Promise&lt;User | null&gt;</code>

--------------------


### signOut()

```typescript
signOut() => Promise<void>
```

--------------------

</docgen-api>
