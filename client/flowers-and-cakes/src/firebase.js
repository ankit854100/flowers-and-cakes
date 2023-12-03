import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCwiTU9kkmnQAylCmGuPbNZoQuzEA_RQfM",
    authDomain: "flowers-and-cakes.firebaseapp.com",
    projectId: "flowers-and-cakes",
    storageBucket: "flowers-and-cakes.appspot.com",
    messagingSenderId: "24923509184",
    appId: "1:24923509184:web:80bb03347cc1009640f825",
    measurementId: "G-2C3FVH32WM"
});

export const auth = app.auth();

export default app;
// const analytics = getAnalytics(app);