import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzW-f47pqSLgXkc5WRiRKMvfD27cMhMps",
  authDomain: "lora-business.firebaseapp.com",
  projectId: "lora-business",
  storageBucket: "lora-business.appspot.com",
  messagingSenderId: "914204899145",
  appId: "1:914204899145:web:400456a1b020dc401c4c98",
  measurementId: "G-R2KJ1S84Z6",
  databaseURL: "https://lora-business-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
export { auth, database };
