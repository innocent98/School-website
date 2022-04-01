import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_A2rKI_rdvhHUChbHrkK_-pe7BjLfG-Y",
  authDomain: "auto-engineers.firebaseapp.com",
  projectId: "auto-engineers",
  storageBucket: "auto-engineers.appspot.com",
  messagingSenderId: "210675035394",
  appId: "1:210675035394:web:8d26a193b3225e19a7a61b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://auto-engineers.appspot.com");

export default storage;
