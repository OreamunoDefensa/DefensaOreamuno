// script.js
import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const phone = e.target.phone.value;

  try {
    await addDoc(collection(db, "usuarios"), {
      name: name,
      phone: phone
    });
    alert('¡Registrado con éxito!');
    e.target.reset();
  } catch (error) {
    console.error('Error al registrar:', error);
    alert('Ocurrió un error.');
  }
});
