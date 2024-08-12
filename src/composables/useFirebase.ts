import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export function useFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDnN0vEMeFmFR1sSowpbsCilkq58ZwLspU",
    authDomain: "bdc-signin-sheet.firebaseapp.com",
    projectId: "bdc-signin-sheet",
    storageBucket: "bdc-signin-sheet.appspot.com",
    messagingSenderId: "314765327273",
    appId: "1:314765327273:web:39d888ed449b6801a162b8",
    measurementId: "G-T95V4HYCYH",
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return {
    firebaseApp,
    firestore,
    auth,
  };
}
