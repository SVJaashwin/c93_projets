//YOUR FIREBASE LINKS
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
    var user_name = localStorage.getItem("user_name")
    var room_name = localStorage.getItem("room_name")
    function send(){
       var input = document.getElementById("type_input").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:input,
             like:0
       });
       document.getElementById("type_input").value="";
    }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(message_data);

         var name = message_data["name"];
         var message = message_data["message"];
         var like = message_data["like"]
         
         name_with_tag =" <h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_with_tag = "<button class='btn btn-warning' id"+firebase_message_id+"value="+like+" onclick='update(this.id)'>";
         span_with_tage = "<span class=' glyphicon glyphicon-tumbs-up'>like: "+ like + "</span></button></hr>" ;
             
         row = name_with_tag + message_with_tag + like_with_tag + span_with_tage ;
         document.getElementById("ouput").innerHTML += row;
//Start code
         function updateLike (message_id)
         {
               console.log("clicked on  like button - " + message_id);
               button_id= message_id
               likes = document.getElementById(button_id).value;
               updated_likes = Number(likes) + 1;
               console.log(updateLike);
         }
         firebase.database().ref(room_name).child(message_id).update({likes : updated_likes});
//End code
      } });  }); }
getData();
