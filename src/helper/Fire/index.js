import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDo3DwtyPNMCc3kCGyG9pDC5zPe3oJvgkk",
  authDomain: "covid19india-tracker-d6d6c.firebaseapp.com",
  databaseURL: "https://covid19india-tracker-d6d6c-default-rtdb.firebaseio.com",
  projectId: "covid19india-tracker-d6d6c",
  storageBucket: "covid19india-tracker-d6d6c.appspot.com",
  messagingSenderId: "201296482239",
  appId: "1:201296482239:web:54accb39565aa188981b0a",
  measurementId: "G-830Y318D4T",
};
// Initialize Firebase
const Fire=firebase.initializeApp(firebaseConfig);

export default Fire;
