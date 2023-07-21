import firebaseConfig from "../config";
import {getAuth} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebase_app = initializeApp(firebaseConfig);

export const auth=getAuth(firebase_app);
export default firebase_app;