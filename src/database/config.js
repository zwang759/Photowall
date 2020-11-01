import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDpAVHTVKuqe6Lk0-dNlggJRSH3mCGCnJI",
    authDomain: "photowall-1d4d3.firebaseapp.com",
    databaseURL: "https://photowall-1d4d3.firebaseio.com",
    projectId: "photowall-1d4d3",
    storageBucket: "photowall-1d4d3.appspot.com",
    messagingSenderId: "484623497054",
    appId: "1:484623497054:web:905606313ed1148f7201cf"
};

firebase.initializeApp(config);

const database = firebase.database();

export {database};