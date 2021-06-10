

const inputNameField = document.getElementById("name_");
const inputEmailField = document.getElementById("email_");
const inputsmsField = document.getElementById("sms_");
const buttonSave = document.querySelector("#saveButton");

const database = firebase.database();
buttonSave.addEventListener('click', (e)=> {
 e.preventDefault();
 window.alert("Thanks For the sms");
 
  database.ref('/users/'+ Math.floor((Math.random() * 100) + 1)).set({
    nameStatus: inputNameField.value,
    emailStatus: inputEmailField.value,
    smsStatus: inputsmsField.value,

  });
});


















// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDG1CNRjRjuvevWuVUD65dSDCITCNO2hKw",
//   authDomain: "softsolutions-012.firebaseapp.com",
//   databaseURL: "https://softsolutions-012-default-rtdb.firebaseio.com",
//   projectId: "softsolutions-012",
//   storageBucket: "softsolutions-012.appspot.com",
//   messagingSenderId: "345862077731",
//   appId: "1:345862077731:web:0ac000d678aea6e2fa6096",
//   measurementId: "G-2WW3NFVCGV"
// };
// firebase.initializeApp(config);
// var firestore = firebase.firestore();

// const docRef = firestore.doc("samples/userData");
// const inputNameField = document.querySelector("#name_");
// const inputEmailField = document.querySelector("#email_");
// const inputsmsField = document.querySelector("#sms_");
// const saveButton = document.querySelector("#saveButton");


// saveButton.addEventListener("click", function(){
//   const nameToSave = inputNameField.value;
//   const emailToSave = inputEmailField.value;
//   const smsToSave = inputsmsField.value;
//   console.log("I am going to save" +nameToSave +","+ emailToSave + "," + smsToSave);
//   docRef.set({
//     nameStatus: nameToSave,
//     emailStatus: emailToSave,
//     smsStatus: smsToSave,

//   }).then(function(){
//     console.log("status saved!");
//   }).catch(function(error){
//     console.log("Got an error", error);
//   });
// });

const MoonPath =
  "M14 28C14 43.464 27.5 55 27.5 56C12.3122 56 0 43.464 0 28C0 12.536 12.3122 0 27.5 0C26.9908 0.00470297 14 12.536 14 28Z";

const SunPath =
  "M55 28C55 43.464 42.6878 56 27.5 56C12.3122 56 0 43.464 0 28C0 12.536 12.3122 0 27.5 0C42.6878 0 55 12.536 55 28Z";

const DarkMode = document.querySelector("#darkmode");
let toggle = false;

DarkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });

  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? SunPath : MoonPath }],
    })
    .add(
      {
        targets: "#darkmode",
        rotate: 320,
      },
      "-= 320"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },
      "-=700"
    );

    if(!toggle){
        toggle = true

    }else{
        toggle = false
    }

    
}
);