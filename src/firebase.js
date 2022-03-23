import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyCdJuqa3xNCaxVbSwTM4lo5_qdkA-ww4h4",

  authDomain: "comp583-data.firebaseapp.com",

  projectId: "comp583-data",

  storageBucket: "comp583-data.appspot.com",

  messagingSenderId: "301140683903",

  appId: "1:301140683903:web:dcbe2a3d2da51c6ba8e34a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;