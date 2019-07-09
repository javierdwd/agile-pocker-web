import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSX4fnSHVMt40e_harc9lxeFygicGWtB8",
  authDomain: "agile-pocker-web.firebaseapp.com",
  databaseURL: "https://agile-pocker-web.firebaseio.com",
  projectId: "agile-pocker-web",
  storageBucket: "",
  messagingSenderId: "784778041351",
  appId: "1:784778041351:web:ace77c431bf209c2"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
