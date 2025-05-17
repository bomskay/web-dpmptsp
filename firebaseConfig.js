import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCM5jZT0EIVHfpGg4ZDfFOU3WTf6VjxKY",
  authDomain: "web-dpmpstp.firebaseapp.com",
  projectId: "web-dpmpstp",
  storageBucket: "web-dpmpstp.firebasestorage.app",
  messagingSenderId: "133831943834",
  appId: "1:133831943834:web:8dd0f51c915a4e330fa123",
  measurementId: "G-G0N9530NZ2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
