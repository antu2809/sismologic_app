// app/assets/javascripts/welcome.js

import axios from 'axios';

document.addEventListener('DOMContentLoaded', function() {
      
    // Función para cargar la lista de características
    function loadFeatures() {
      axios.get('/api/features')
        .then(function(response) {
          var features = response.data.data;
          var featureList = document.getElementById('feature-list');
          featureList.innerHTML = ''; // Limpiar la lista antes de agregar nuevas características
          features.forEach(function(feature) {
            var li = document.createElement('li');
            li.innerHTML = `
              <h3>${feature.attributes.title}</h3>
              <p>Magnitude: ${feature.attributes.magnitude}</p>
              <p>Place: ${feature.attributes.place}</p>
              <p>Time: ${feature.attributes.time}</p>
              <p>Tsunami: ${feature.attributes.tsunami}</p>
              <p>Mag Type: ${feature.attributes.mag_type}</p>
              <p>Longitude: ${feature.attributes.coordinates.longitude}</p>
              <p>Latitude: ${feature.attributes.coordinates.latitude}</p>
              <button onclick="showCommentForm(${feature.id})">Agregar Comentario</button>
            `;
            featureList.appendChild(li);
          });
        })
        .catch(function(error) {
          console.error('Error al cargar características:', error);
        });
    }

    // Función para mostrar el formulario de comentario
    function showCommentForm(featureId) {
      document.getElementById('feature-id').value = featureId;
      document.getElementById('comment-form').style.display = 'block';
    }

    // Manejar el envío del formulario de comentario
    document.getElementById('comment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var featureId = document.getElementById('feature-id').value;
      var commentBody = document.getElementById('comment-body').value;
      axios.post('/api/features/' + featureId + '/comments', {
          body: commentBody
        })
        .then(function(response) {
          alert('Comentario agregado exitosamente!');
          document.getElementById('comment-form').reset(); // Limpiar el formulario después de enviar el comentario
        })
        .catch(function(error) {
          console.error('Error al agregar comentario:', error);
        });
    });

    // Cargar las características al cargar la página
    loadFeatures();
  });


