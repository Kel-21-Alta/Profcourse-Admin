/** @format */

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSsEss000kuQSAy16zEPBrZN9JumCGgMY",

  authDomain: "profcourse-admin-storage.firebaseapp.com",

  projectId: "profcourse-admin-storage",

  storageBucket: "profcourse-admin-storage.appspot.com",

  messagingSenderId: "834561978487",

  appId: "1:834561978487:web:c166700af0a7a8ce511672",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
