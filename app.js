firebase.initializeApp({
  apiKey: 'AIzaSyBqSgpg5LwoH4PKZ-_xZEnGs_D8vHnCCug',
  authDomain: 'usuario-19147.firebaseapp.com',
  projectId: 'usuario-19147'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});




