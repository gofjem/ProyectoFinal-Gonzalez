// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection,getFirestore} from "firebase/firestore"
import { productos } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCud6pjFXK84w_7N_ArU9YU5jKkUrUSoWc",
  authDomain: "globalentt-store.firebaseapp.com",
  projectId: "globalentt-store",
  storageBucket: "globalentt-store.appspot.com",
  messagingSenderId: "924699027590",
  appId: "1:924699027590:web:50997affa37db7889ec907"
};
console.log("se conecta")
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("se conecta")

// productos.forEach((prod)=>{
//     addDoc(collection(db,"productos"),prod)
//     .then((elem)=>console.log(`se agrego el producto id ${elem.id}`))
//     .catch((error)=>console.log(error))
// });