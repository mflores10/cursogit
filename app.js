firebase.initializeApp({
  apiKey: 'AIzaSyBqSgpg5LwoH4PKZ-_xZEnGs_D8vHnCCug',
  authDomain: 'usuario-19147.firebaseapp.com',
  projectId: 'usuario-19147'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


function guardarUsuario(){

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var fecha = document.getElementById('fecha').value;

	db.collection("users").add({
	    first: nombre,
	    last: apellido,
	    born: fecha
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	    limpiarUsuario();			

	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});	
}

function limpiarUsuario(){
	document.getElementById('nombre').value = '';
	document.getElementById('apellido').value = '';
	document.getElementById('fecha').value = '';
}

// Leer datos
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
	tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        	<tr>
              <th scope="row">${doc.id}</th>
              <td>${doc.data().first}</td>
              <td>${doc.data().last}</td>
              <td>${doc.data().born}</td>
            </tr>
        `;
    });
});




