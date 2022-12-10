// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    caricature: "marco_polello_avatar.png", //TODPOL mettere immagine hero
    name: "Marco Polello",
    birth: "1994-04-29",
    email: "marcopole668@gmail.com",
    phone: "+39 3478087193",
    location: "Camponogara, Venezia, Italia"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    apiKey: "AIzaSyDZ2lxzDhqcrVMGDOc",
    authDomain: "my-website-aseapp.com",
    databaseURL: "https://my-wdb.europe-west1.firebasedatabase.app",
    projectId: "my-wpol",
    storageBucket: "my-websi.appspot.com",
    messagingSenderId: "4939709",
    appId: "1:4931873d2075b4b0669c2c4",
    measurementId: "G-9FQZ59F"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
