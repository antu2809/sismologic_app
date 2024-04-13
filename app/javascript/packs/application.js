import React from 'react';
import ReactDOM from 'react-dom';
import FeatureList from '../components/FeatureList';
import CommentForm from '../components/CommentForm';
import '../fonts/fonts.css';
import image from '../packs/images/RiEarthquakeFill.png';
import '../stylesheets/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const featureListContainer = document.getElementById('feature-list-container');
  if (featureListContainer) {
    ReactDOM.createRoot(featureListContainer).render(<FeatureList />);
  }
});

// Función para mostrar el formulario de comentario
window.showCommentForm = (featureId) => {
  const commentFormContainer = document.getElementById('comment-form-container');
  if (commentFormContainer) {
    ReactDOM.createRoot(commentFormContainer).render(<CommentForm featureId={featureId} />);
  }
};
