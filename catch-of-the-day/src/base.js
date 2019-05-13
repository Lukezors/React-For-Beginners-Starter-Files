import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBsZItIn0cI0fkFOUfIazr1Wk_01Sy6xA",
    authDomain: "catch-of-the-day-luke-c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-luke-c.firebaseio.com",
    projectId: "catch-of-the-day-luke-c",
    storageBucket: "catch-of-the-day-luke-c.appspot.com",
    messagingSenderId: "1070019865120",
    appId: "1:1070019865120:web:1c5e01bc9b2e0fb3"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;