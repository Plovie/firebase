// Initialize Firebase

let config = {
    apiKey: "AIzaSyALyaQII_UYGd12D1i-OQxhkbftt5SQADI",
    authDomain: "myproject-d5b74.firebaseapp.com",
    databaseURL: "https://myproject-d5b74.firebaseio.com",
    projectId: "myproject-d5b74",
    storageBucket: "myproject-d5b74.appspot.com",
    messagingSenderId: "723848559847"
};
firebase.initializeApp(config);

let database = firebase.database();