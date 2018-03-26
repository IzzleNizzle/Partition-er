// Initialize Firebase
var config = {
  apiKey: "AIzaSyBtCHKccoBrNgyRld2RJRIm2VecSPXV_gg",
  authDomain: "iz-partitioner.firebaseapp.com",
  databaseURL: "https://iz-partitioner.firebaseio.com",
  projectId: "iz-partitioner",
  storageBucket: "iz-partitioner.appspot.com",
  messagingSenderId: "259789703509"
};
firebase.initializeApp(config);
//shortcut reference for firebase database
var db = firebase.database();


//Global Local variables

//used for counting table data
var boxCount = 1;
// giving a different color to each box
var color = ["blue", "purple", "red", "orange", "yellow"];
//variable to store latest value of the left property for boxes
var leftValue = 0;
// Account 1 value
var acct1Value = 100;
var valueTotal = 0;


// This happens when you click on the top submit button
$("#accountSubmit").on("click", function () {
  //prevent anoying refresh
  event.preventDefault();

  // capture user input value
  acct1Value = parseFloat($("#account-value").val().trim());

  // Preventing input of values other than numbers
  if (isNaN(acct1Value)) {
    $("#prompt1").text("Invalid input")
  } else {
    // clear prompt screen if there is anyting there
    $("#prompt1").empty();

    // print to html the value
    $("#display-value").text("$" + acct1Value);

  }

});



// click function for Box 2 form submit
$("#formSubmit").on("click", function () {
  //prevent anoying refresh
    event.preventDefault();

  //gather inputs from form
  var name = $("#name1").val().trim();
  var value = parseFloat($("#value1").val().trim());
  // keeps tally of all the values
  valueTotal += value;

  // if you entered a value that is more than what is available, don't run code
  if (valueTotal > acct1Value) {
    // send error message
    $("#prompt").text("You have exceeded the account Balance.");
    // revert value so it can be re calculated
    valueTotal -= value;
  } else {

    // ::MAJOR LOGIC:: if valid input then create box for it
    if (name === "" && isNaN(value)) {
      $("#prompt").text("Invalid input");
    } else {

      // clear prompt screen if there is anyting there
      $("#prompt").empty();

      // ****** creating box for visual ********

      var box = $("<div>");
      // giving box properties of other boxes
      box.attr("id", "box1");
      // inserting text into box
      box.html("<p>Name: " + name + "</p><p>Value: " + value + "</p>");
      // sizing box
      box.css("width", (value / acct1Value * 100) + "%");

      // first find percentage of input to 
      box.css("left", leftValue);
      // setting background color
      box.css("background-color", color[Math.floor(Math.random() * color.length)]);

      // figure out percentage of 700px div
      var perc = (value / acct1Value);

      // find magic number from percentage of 700
      // use case - 25 - what is 25 percent of 700
      var magicNumber = 700 * perc;
      leftValue += magicNumber;

      // console.log(value, leftValue);
      $("#graph1").append(box);

      // ****** END creating box for visual ********



      // ****** creating table data entry for box ********

      // creating variables for html elements
      var tableRow = $("<tr>");
      var tableEntryNumber = $("<td>");
      var tableEntryName = $("<td>");
      var tableEntryValue = $("<td>");

      // assigning appropriate variables to html elements

      tableEntryName.text(name);
      tableEntryValue.text(value);
      tableEntryNumber.text(boxCount);
      // incrementing boxCount variable
      boxCount++

      // appending variables together 

      tableRow.append(tableEntryNumber);
      tableRow.append(tableEntryName);
      tableRow.append(tableEntryValue);

      // append tableRow to page
      $("#account1-table").append(tableRow);

      // ****** ENDcreating table data entry for box ********


    }//end if-else statement 

  }



});






// **************************** USER AUTHENTICATION ********************************

// Variables with user authentication
const auth = firebase.auth();
auth.onAuthStateChanged(firebaseUser => { });
var logOut = document.getElementById("btnLogOut");

// Get Elements
var txtEmail;
var txtPassword;
var user;


// Add login event
$("#btnLogin").on("click", function () {

  // Get email and pass
  txtEmail = $("#txtEmail").val();
  txtPassword = $("#txtPassword").val();
  // Sign in 
  const promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
  promise.catch(e => console.log(e.message));
})

// Add Sign up event
$("#btnSignUp").on("click", function () {
  // Get email and pass
  txtEmail = $("#txtEmail").val().trim();
  txtPassword = $("#txtPassword").val().trim();
  // Sign up 
  const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPassword);
  promise.catch(e => console.log(e.message));
})



// Add Sign out event
$("#btnLogOut").on("click", function () {
  // Sign out 
  firebase.auth().signOut();
  console.log("test");
});


// Add a reatime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    user = firebaseUser;
    console.log(firebaseUser)
    console.log("is this working?")
    console.log(firebaseUser.email)
    console.log(firebaseUser.uid)
    // console.log(firebaseUser.Kb.I)
    logOut.classList.remove("hide");
    $("#userName").text("Hi " + firebaseUser.email + "!");
  } else {
    console.log('not logged in');
    console.log(firebaseUser)
    logOut.classList.add("hide");
    $("#userName").html("<a href='sign-in.html'>Hi! Click to Log In</a>");
  }
});


// **************************** END USER AUTHENTICATION ********************************


// problem i'm currently solving for; when a page loads, user is logged in and has a past saved data, how to load it correctly.


// The next stage of development would be to take all local variables and store then instead in google's firebase so that this application will be cloud base.

// List of important variables;

// step 1 var acct1Value needs to be stored on database and reloaded when page loads anew
// step 2 print to html the acct1Value value - $("#display-value").text("$" + acct1Value);
// valueTotal needs to be stored on database and reloaded when page loads anew - this has to do with making sure we dont go over alloted amount

// leftValue






































// playing with firebase database handling

//$("#accountSubmit").on("click", function (){

//  if (user.uid === null){
 //   console.log("noone is logged in to store data for");
 // } else {
    // db.ref().set('');
 //   db.ref("users/" + user.uid + "/testfolder").set('movieChoices')
  //  db.ref("users/" + user.uid + "/testfolder2").set('movieChoices')
  //  db.ref("users/" + user.uid + "/testfolder3").push('movieChoices')
 // }
  

//})

// Here is the structure I'm going to use for storing the data to our warehouse
// setting user id
//var userId = firebase.auth().currentUser.uid;
// set data
//firebase.database().ref('users/' + userId).set({
    //username: "name",
    //email: "email",
    //profile_picture: "imageUrl"
//});


// changing some data
//var updates = {};
//updates['/users/moGczXfHVRc6S8WvKeBRne7NN6o2/email'] = "testemail";
//firebase.database().ref().update(updates);



// listener for data
//firebase.database().ref('/users/' + userId + '/email').on('value', function (snapshot) {
  //  console.log(snapshot.val() + " wizard");
//});
