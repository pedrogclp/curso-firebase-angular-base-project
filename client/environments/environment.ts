// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    // Paste all this from the Firebase console...
    apiKey: "AIzaSyDuPWPmVB5aJTGxGtdM7Vzd2DjW7M5HXhU",
    authDomain: "curso-firebase-angular-bp.firebaseapp.com",
    databaseURL: "https://curso-firebase-angular-bp.firebaseio.com",
    projectId: "curso-firebase-angular-bp",
    storageBucket: "",
    messagingSenderId: "725474874660"
  }
};
