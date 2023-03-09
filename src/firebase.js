import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfde12Hm3-wKSzl7MPHUl9BJzSvqRzj28",
  authDomain: "shop287-d976d.firebaseapp.com",
  projectId: "shop287-d976d",
  storageBucket: "shop287-d976d.appspot.com",
  messagingSenderId: "567008343834",
  appId: "1:567008343834:web:a2d1c266649346ab5c9ea3",
  measurementId: "G-QYFHPS2JVC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
