import React, { useState } from 'react';
import axios from 'axios';
import '../stylesheets/styles.css';

const CommentForm = ({ featureId }) => {
  const [commentBody, setCommentBody] = useState('');
  const [comments, setComments] = useState([]); // Define el estado de los comentarios

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!commentBody.trim()) {
      alert('El comentario no puede estar vacío.');
      return;
    }
    try {
      const response = await axios.post(`/api/features/${featureId}/comments`, { body: commentBody });
      if (response.status === 201) {
        setComments([...comments, response.data]); // Actualiza el estado de los comentarios
        alert('Comentario agregado exitosamente!');
        setCommentBody('');
      } else {
        console.error('Error al agregar comentario:', response);
      }
    } catch (error) {
      console.error('Error al agregar comentario:', error);
    }
  };

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.body}</li>
        ))}
      </ul>
      <h2>Agregar Comentario</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          value={commentBody}
          onChange={(event) => setCommentBody(event.target.value)}
          placeholder="Escribe tu comentario"
        />
        <button type="submit" className="button">Agregar Comentario</button>
      </form>
      
    </div>
  );
};

export default CommentForm;