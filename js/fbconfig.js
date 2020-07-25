var firebaseConfig = {
    apiKey: "AIzaSyC5_VA4G9ocxnoI7Uz0xpZWfPq7F_JAOGw",
    authDomain: "rememberclan-admin.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "rememberclan-admin"
}

var app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(app);
