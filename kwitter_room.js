
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCPol-OcGa1RfCEwAnxqwJA6ZT0CNW4Il8",
      authDomain: "wathapp-c9985.firebaseapp.com",
      databaseURL: "https://wathapp-c9985-default-rtdb.firebaseio.com",
      projectId: "wathapp-c9985",
      storageBucket: "wathapp-c9985.appspot.com",
      messagingSenderId: "237101483924",
      appId: "1:237101483924:web:1ba2107e7cbc4a6eb63181",
      measurementId: "G-S6RFX9DCMD"
    };
    firebase.initializeApp(firebaseConfig);
    var user = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome :"+user;
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
             //End code
      });});}
getData();
function add_room(){
      var room_name =document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name)
      firebase.database().ref("/").child(room_name).update({purpos:"adding room name"});
      console.log(room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}