// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    // Paste all this from the Firebase console...
    apiKey: "AIzaSyAub9hhZ30XSTusNaWE11mUXTMj4Lo7dYk",
    authDomain: "creditos-60ac0.firebaseapp.com",
    databaseURL: "https://creditos-60ac0.firebaseio.com",
    projectId: "creditos-60ac0",
    storageBucket: "creditos-60ac0.appspot.com",
    messagingSenderId: "1055022691045"
  }
};
