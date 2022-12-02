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
    apiKey: "AIzaSyDIFDirz_wfBrTxtU0TolIyPuGQBhTzRUc",
    authDomain: "resume-live-894be.firebaseapp.com",
    databaseURL: "https://resume-live-894be-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resume-live-894be",
    storageBucket: "resume-live-894be.appspot.com",
    messagingSenderId: "266020434697",
    appId: "1:266020434697:web:e48c37c4743b38b21c19d8",
    measurementId: "G-YBPQ090ZV5"
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
