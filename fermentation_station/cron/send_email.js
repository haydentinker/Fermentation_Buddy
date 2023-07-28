const admin = require("firebase-admin");
const nodemailer= require('nodemailer');
const serviceAccount = require("../serviceAccountKey.json");
const emailAuth =require( "./emailConfig");
const transporter=nodemailer.createTransport({
  service:"gmail",
  auth:emailAuth
});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

async function getEmailList() {
  const currentDate=new Date();
  const emailList = new Set();
  const usersRef = firestore.collection("users");

  try {
    const usersSnapshot = await usersRef.get();

    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id;
      const projectsRef = userDoc.ref.collection("projects");
      const projectsSnapshot = await projectsRef.get();

 
      projectsSnapshot.forEach((projectDoc) => {
        const projectData = projectDoc.data();
        
        const userDocData = userDoc.data();
        const projectEndDate= new Date(projectData.end_date);
        console.log(projectEndDate);
        console.log(currentDate);
        if(projectEndDate.getDate()===currentDate.getDate()){
        emailList.add(userDocData.email);
        console.log(`User ID: ${userId}, Project ID: ${projectDoc.id}, Data:`, projectData);
        }
      });
    }
  } catch (error) {
    console.error("Error fetching projects for all users:", error);
  }

  return emailList;
}

async function sendEmails() {
  const emailSet = await getEmailList();
  console.log(emailSet);
  for(const value of emailSet){
    const mailOptions={
      from:emailAuth.user,
      to: value,
      subject:"Fermentation Buddy Project Reminder",
      text:"Your project finishes today!"
    }
    transporter.sendMail(mailOptions,((error,info)=>{
      if(error){
        console.error(error);
      }else{
        console.log(info.response);
      }
    }))
  }

}

sendEmails();
