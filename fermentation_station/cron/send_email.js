const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

async function getEmailList() {
  const emailList = new Set();
  const usersRef = firestore.collection("users");

  try {
    const usersSnapshot = await usersRef.get();

    // Iterate through all user documents
    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id;
      const projectsRef = userDoc.ref.collection("projects");
      const projectsSnapshot = await projectsRef.get();

      // Iterate through all projects for this user
      projectsSnapshot.forEach((projectDoc) => {
        const projectData = projectDoc.data();
        // Do whatever you need with the project data for each user
        const userDocData = userDoc.data();
        emailList.add(userDocData.email);
        console.log(`User ID: ${userId}, Project ID: ${projectDoc.id}, Data:`, projectData);
      });
    }
  } catch (error) {
    console.error("Error fetching projects for all users:", error);
  }

  return emailList;
}

async function printEmail() {
  const emailSet = await getEmailList();
  console.log(emailSet);
}

printEmail();
