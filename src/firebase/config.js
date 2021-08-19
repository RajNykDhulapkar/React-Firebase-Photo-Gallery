import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import configData from "./configData.json";

// Your web app's Firebase configuration
var firebaseConfig = configData;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
