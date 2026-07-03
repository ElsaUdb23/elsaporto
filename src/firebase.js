import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = null;

const hasFirebaseConfig = Boolean(firebaseConfig);

const app = hasFirebaseConfig ? initializeApp(firebaseConfig) : null;

export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;
export const storage = app ? getStorage(app) : null;
export { hasFirebaseConfig };