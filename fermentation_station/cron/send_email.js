const admin=require('firebase-admin');

var serviceAccount = require("../serviceAccountKey.json");


const getCollection = async ()=>{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    const firestore = admin.firestore();
    const usersCollection = firestore.collection('users');
    usersCollection
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(`Name: ${userData.name}`);
        });
    })
    .catch((error) => {
        console.error('Error getting documents:', error);
    });
};

getCollection();