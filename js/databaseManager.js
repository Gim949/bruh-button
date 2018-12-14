const firebase = require("firebase/app");
require("firebase/database");

export default class databaseManager {
    constructor() {
        // Should probably seperate these configs and put them in a process.env file or something
        firebase.initializeApp({
            apiKey: "AIzaSyC8FfCFHWQfFrsJeGiAgA5-KZE7wYIYm5Y",
            authDomain: "bruh-button-e12fe.firebaseapp.com",
            databaseURL: "https://bruh-button-e12fe.firebaseio.com",
            projectId: "bruh-button-e12fe",
            storageBucket: "bruh-button-e12fe.appspot.com",
            messagingSenderId: "374160570149"
        });

        this.db = firebase.database();
    }
}