import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDpAVHTVKuqe6Lk0-dNlggJRSH3mCGCnJI",
    authDomain: "photowall-1d4d3.firebaseapp.com",
    databaseURL: "https://photowall-1d4d3.firebaseio.com",
    projectId: "photowall-1d4d3",
    storageBucket: "",
    messagingSenderId: "484623497054",
    appId: "1:484623497054:web:905606313ed1148f7201cf"
};

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database}