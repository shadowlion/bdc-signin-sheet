import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";

function useFirebase() {
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

  const getDocuments = async <T>(collectionId: string) => {
    const colRef = collection(firestore, collectionId);
    const q = query(colRef);
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ ...d.data(), uid: d.id } as T));
  };

  return {
    firebaseApp,
    firestore,
    auth,
    getDocuments,
  };
}

export default useFirebase;
