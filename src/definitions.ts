export interface CAPFirebaseAuthPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
