import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUGh8RGglcfciixR1hYZm5DPfvJD4N5vY",
  authDomain: "reactcoder-c51d6.firebaseapp.com",
  projectId: "reactcoder-c51d6",
  storageBucket: "reactcoder-c51d6.appspot.com",
  messagingSenderId: "831770470847",
  appId: "1:831770470847:web:90532e3ec5911aa1dd590a"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}