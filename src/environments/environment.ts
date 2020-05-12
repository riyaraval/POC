// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   // Your web app's Firebase configuration
   firebase: {
    apiKey: "AIzaSyA9jvozPkDbA7fCFSofhotqertCvPkRuH8",
    authDomain: "poc-dfb78.firebaseapp.com",
    databaseURL: "https://poc-dfb78.firebaseio.com",
    projectId: "poc-dfb78",
    storageBucket: "poc-dfb78.appspot.com",
    messagingSenderId: "398953342980",
    appId: "1:398953342980:web:29c61f753cffaff02e6d51",
    measurementId: "G-ZD8G2CTJK4"
  }
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
